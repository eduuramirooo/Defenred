import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// Lazy load the Footer component
const LazyFooter = lazy(() => import("./components/Footer"));

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This is where the route-specific content will be rendered */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <LazyFooter />
      </Suspense>
    </div>
  );
};

export default Layout;