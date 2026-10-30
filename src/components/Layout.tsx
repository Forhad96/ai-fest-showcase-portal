import { useEffect, } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { SITE } from "../content";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";





function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Layout() {



  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <div className="bg-pine text-center text-xs sm:text-xs text-leafsoft/90 py-1.5 px-3 border-b border-white/5">
        {SITE.announcement}
      </div>

      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}



