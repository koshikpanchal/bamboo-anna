import { useEffect, useMemo, useRef } from 'react';
import type { CSSProperties } from 'react';
import './ScrollSplitShowcase.scss';

type TileConfig = {
  id: number;
  row: number;
  col: number;
  dx: number;
  dy: number;
  rot: number;
  z: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

interface ScrollSplitShowcaseProps {
  fromImage: string;
  toImage: string;
  rows?: number;
  cols?: number;
}

const ScrollSplitShowcase = ({
  fromImage,
  toImage,
  rows = 6,
  cols = 10,
}: ScrollSplitShowcaseProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const layerARef = useRef<HTMLDivElement | null>(null);
  const layerBRef = useRef<HTMLDivElement | null>(null);
  const tileRefsA = useRef<Array<HTMLDivElement | null>>([]);
  const tileRefsB = useRef<Array<HTMLDivElement | null>>([]);

  const tiles = useMemo<TileConfig[]>(() => {
    const configs: TileConfig[] = [];
    const centerCol = (cols - 1) / 2;
    const centerRow = (rows - 1) / 2;

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const id = row * cols + col;
        const nx = (col - centerCol) / Math.max(centerCol, 1);
        const ny = (row - centerRow) / Math.max(centerRow, 1);

        const noiseX = (Math.sin(id * 12.9898) * 43758.5453) % 1;
        const noiseY = (Math.sin(id * 78.233) * 12753.123) % 1;

        const dx = nx * 0.9 + (noiseX - 0.5) * 0.7;
        const dy = ny * 0.9 + (noiseY - 0.5) * 0.7;

        const rotNoise = (Math.sin(id * 3.77) * 10000) % 1;
        const rot = (rotNoise - 0.5) * 54;
        const z = ((Math.sin(id * 1.11) * 9999) % 1) * 220;

        configs.push({ id, row, col, dx, dy, rot, z });
      }
    }

    return configs;
  }, [cols, rows]);

  useEffect(() => {
    const section = sectionRef.current;
    const layerA = layerARef.current;
    const layerB = layerBRef.current;

    if (!section || !layerA || !layerB) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      layerA.style.opacity = '0';
      layerB.style.opacity = '1';
      return;
    }

    let rafId = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = Math.max(rect.height - viewport, 1);
      const scrolled = clamp(-rect.top, 0, total);
      const progress = clamp(scrolled / total, 0, 1);

      section.style.setProperty('--p', progress.toFixed(4));

      const scatterA = easeOutCubic(clamp(progress * 2.1, 0, 1));
      const scatterB = easeOutCubic(clamp(1 - (progress - 0.45) * 2.0, 0, 1));

      const opacityA = 1 - easeOutCubic(clamp((progress - 0.18) / 0.25, 0, 1));
      const opacityB = easeOutCubic(clamp((progress - 0.38) / 0.25, 0, 1));

      layerA.style.opacity = opacityA.toFixed(3);
      layerB.style.opacity = opacityB.toFixed(3);

      const amp = 190;
      const rotAmp = 26;

      tiles.forEach((tile, index) => {
        const tileA = tileRefsA.current[index];
        const tileB = tileRefsB.current[index];

        if (tileA) {
          const x = tile.dx * scatterA * amp;
          const y = tile.dy * scatterA * amp;
          const z = tile.z * scatterA;
          const r = tile.rot * scatterA + (progress - 0.5) * rotAmp;
          const s = 1 - scatterA * 0.12;

          tileA.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotate(${r}deg) scale(${s})`;
          tileA.style.filter = `blur(${scatterA * 1.2}px)`;
        }

        if (tileB) {
          const x = -tile.dx * scatterB * amp;
          const y = -tile.dy * scatterB * amp;
          const z = tile.z * scatterB;
          const r = -tile.rot * scatterB + (progress - 0.5) * rotAmp;
          const s = 1 - scatterB * 0.12;

          tileB.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotate(${r}deg) scale(${s})`;
          tileB.style.filter = `blur(${scatterB * 1.2}px)`;
        }
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [tiles]);

  return (
    <section className="scroll-showcase" ref={sectionRef}>
      <div className="scroll-showcase__sticky">
        <div
          className="scroll-showcase__stage"
          aria-hidden
          style={{ '--cols': cols, '--rows': rows } as CSSProperties}
        >
          <div className="scroll-showcase__layer" ref={layerARef}>
            {tiles.map((tile, index) => (
              <div
                key={`a-${tile.id}`}
                className="scroll-showcase__tile"
                ref={(node) => {
                  tileRefsA.current[index] = node;
                }}
                style={{
                  backgroundImage: `url(${fromImage})`,
                  backgroundSize: `${cols * 100}% ${rows * 100}%`,
                  backgroundPosition: `${(tile.col / (cols - 1)) * 100}% ${(tile.row / (rows - 1)) * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="scroll-showcase__layer" ref={layerBRef}>
            {tiles.map((tile, index) => (
              <div
                key={`b-${tile.id}`}
                className="scroll-showcase__tile"
                ref={(node) => {
                  tileRefsB.current[index] = node;
                }}
                style={{
                  backgroundImage: `url(${toImage})`,
                  backgroundSize: `${cols * 100}% ${rows * 100}%`,
                  backgroundPosition: `${(tile.col / (cols - 1)) * 100}% ${(tile.row / (rows - 1)) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="scroll-showcase__overlay">
          <div className="scroll-showcase__copy scroll-showcase__copy--a">
            <span className="chip">Scroll craft</span>
            <h2>Bamboo, engineered by nature.</h2>
            <p>
              As you scroll, the product breaks into parts and reveals the detail
              behind every curve, edge, and finish.
            </p>
          </div>

          <div className="scroll-showcase__copy scroll-showcase__copy--b">
            <span className="chip">Built for brands</span>
            <h2>Custom-ready. Premium-feel. Plastic-free.</h2>
            <p>
              Hospitality kits, dental essentials, and gifting lines crafted to
              match your brand and timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSplitShowcase;
