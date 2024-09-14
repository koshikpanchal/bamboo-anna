import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AboutUs from "./pages/about-us/AboutUs";
import CompanySynopsis from "./pages/company-synopsis/CompanySynopsis";
import ContactUs from "./pages/contact-us/ContactUs";
import Products from "./pages/products/Products";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "aboutUs", element: <AboutUs /> },
    { path: "companySynopsis", element: <CompanySynopsis /> },
    { path: "contactUs", element: <ContactUs /> },
    { path: "products", element: <Products /> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
