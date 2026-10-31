import { SITE } from "@/content";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Clapperboard,
  Home,
  Inbox,
  LayoutGrid,
  Menu,
  Star,
  User,
  Users,
  X,
} from "lucide-react";
import { ETrainingMark } from "../BrandLogos";
const NAV = [
  { to: "/", label: SITE.navigation.home, icon: Home, end: true },
  { to: "/film", label: SITE.navigation.film, icon: Clapperboard, end: false },
  { to: "/feedbackbox", label: SITE.navigation.feedbackBox, icon: Inbox, end: false },
  { to: "/gallery", label: SITE.navigation.gallery, icon: LayoutGrid, end: false },
  { to: "/creators", label: SITE.navigation.creators, icon: Users, end: false },
  {  to: "/family" ,label: SITE.navigation.family, icon:User ,end:false}
];

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <ETrainingMark className="h-11 w-11 shrink-0 transition-transform group-hover:scale-105" />
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold text-white">
          {SITE.brand.shortName}
        </span>
        <span className="block text-xs text-white/65">{SITE.brand.batch} • {SITE.brand.branch}</span>
      </span>
    </Link>
  );
}
export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="sticky top-0 z-50 bg-night/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="main">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-leaf/15 text-leafsoft" : "text-white/70 hover:text-white hover:bg-white/5"
                }`
              }
            >
              <n.icon className="h-4 w-4" />
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/feedback"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-flag px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-flag/30 transition-all hover:bg-flagdeep hover:-translate-y-0.5"
          >
            <Star className="h-4 w-4" />
            {SITE.navigation.feedback}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-night px-4 pb-5 pt-3 space-y-1" aria-label="mobile">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold ${isActive ? "bg-leaf/15 text-leafsoft" : "text-white/75 hover:bg-white/5"
                }`
              }
            >
              <n.icon className="h-5 w-5" />
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/feedback"
            className="flex items-center gap-3 rounded-lg bg-flag px-4 py-3 text-base font-bold text-white mt-2"
          >
            <Star className="h-5 w-5" />
            {SITE.navigation.feedback}
          </Link>
        </nav>
      )}
    </header>
  )
}