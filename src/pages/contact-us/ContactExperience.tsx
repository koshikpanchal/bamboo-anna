import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useState, useRef } from 'react';
import BambooModel from './BambooModel';

const CameraAnimation = () => {
  const controlsRef = useRef<any>(null);
  const angleRef = useRef(0);
  const radiusRef = useRef(7);
  const heightRef = useRef(3);
  const isUserInteractingRef = useRef(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteractionStart = () => {
    isUserInteractingRef.current = true;
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
  };

  const handleInteractionEnd = () => {
    // Wait 2 seconds after user stops interacting before resuming animation
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      // Calculate the current angle, radius and height based on camera position when resuming
      if (controlsRef.current) {
        const camera = controlsRef.current.object;
        const x = camera.position.x;
        const y = camera.position.z; // Note: using z for the circular plane
        
        // Calculate angle from current position
        angleRef.current = Math.atan2(x, y);
        
        // Calculate radius from current position
        radiusRef.current = Math.sqrt(x * x + y * y);
        
        // Store current height to maintain it
        heightRef.current = camera.position.y;
      }
      isUserInteractingRef.current = false;
    }, 2000);
  };

  useFrame(() => {
    if (controlsRef.current && !isUserInteractingRef.current) {
      // Slower rotation speed
      angleRef.current += 0.0015;
      
      // Circular motion on XY plane
      const x = Math.sin(angleRef.current) * radiusRef.current;
      const y = Math.cos(angleRef.current) * radiusRef.current;
      
      // Keep height constant at whatever the user left it
      const z = heightRef.current;
      
      // Update camera position
      controlsRef.current.object.position.set(x, z, y);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={true}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
      onStart={handleInteractionStart}
      onEnd={handleInteractionEnd}
    />
  );
};

const ContactExperience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const canvasHeight = isMobile ? '350px' : '500px';
  const cameraPosition: [number, number, number] = isMobile ? [0, 2, 5] : [0, 3, 7];

  return (
    <div style={{ width: '100%', height: canvasHeight }}>
      <Canvas shadows camera={{ position: cameraPosition, fov: 45 }}>
        <ambientLight intensity={0.5} color="#fff4e6" />
        <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={2.5}
          color="#ffd9b3"
        />
        <CameraAnimation />
        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>
        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <BambooModel />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;