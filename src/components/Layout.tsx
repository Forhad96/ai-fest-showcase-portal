import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Clapperboard,
  Heart,
  Home,
  Inbox,
  LayoutGrid,
  MapPin,
  Menu,
  Phone,
  Star,
  Users,
  X,
  GraduationCap,
} from "lucide-react";
import { FacebookIcon, YoutubeIcon } from "./brands";
import { DydMark, ETrainingMark, InstitutionalLockup } from "./BrandLogos";
import { SITE } from "../content";

const NAV = [
  { to: "/", label: SITE.navigation.home, icon: Home, end: true },
  { to: "/film", label: SITE.navigation.film, icon: Clapperboard, end: false },
  { to: "/feedbackbox", label: SITE.navigation.feedbackBox, icon: Inbox, end: false },
  { to: "/gallery", label: SITE.navigation.gallery, icon: LayoutGrid, end: false },
  { to: "/creators", label: SITE.navigation.creators, icon: Users, end: false },
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <div className="bg-pine text-center text-xs sm:text-xs text-leafsoft/90 py-1.5 px-3 border-b border-white/5">
        {SITE.announcement}
      </div>

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
                  `flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "bg-leaf/15 text-leafsoft" : "text-white/70 hover:text-white hover:bg-white/5"
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
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold ${
                    isActive ? "bg-leaf/15 text-leafsoft" : "text-white/75 hover:bg-white/5"
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

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="relative bg-night text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <InstitutionalLockup inverse />
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              {SITE.footer.summary}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.youtube.com/results?search_query=bangla+ai+tutorial"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/70 hover:text-white hover:bg-flag hover:ring-flag transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/dyd.gov.bd"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white/70 hover:text-white hover:bg-[#1877f2] hover:ring-[#1877f2] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <span className="flex items-center gap-1.5 text-xs text-white/65">
                <GraduationCap className="h-4 w-4 text-leafsoft" /> দ্বিতীয় ব্যাচ • মাস ০১
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-display font-bold text-leafsoft mb-3">দ্রুত লিংক</h3>
              <ul className="space-y-2 text-sm text-white/65">
                <li><Link className="hover:text-white transition-colors" to="/film">বাংলাদেশ ২০৪০ ফিল্ম</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/feedbackbox">FeedbackBox ইনোভেশন</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/creators">ক্রিয়েটর হাব</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/feedback">মতামত কর্নার</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-leafsoft mb-3">গ্যালারি</h3>
              <ul className="space-y-2 text-sm text-white/65">
                <li><Link className="hover:text-white transition-colors" to="/gallery/photos">এআই ফটো এডিটিং</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/gallery/websites">ওয়েবসাইট প্রিভিউ</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/gallery/posters">মার্কেটিং পোস্টার</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/gallery">সব ক্যাটাগরি</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-leafsoft mb-3">প্রশিক্ষণ কেন্দ্র</h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-flag" />
                {SITE.footer.location}
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 mt-1 shrink-0 text-flag" />
                {SITE.footer.office}
              </li>
              <li className="flex gap-2.5">
                <GraduationCap className="h-4 w-4 mt-1 shrink-0 text-flag" />
                {SITE.footer.courseDuration}
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <ETrainingMark className="h-10 w-10" />
              <DydMark className="h-11 w-9" />
              <span className="text-xs leading-snug text-white/70">প্রশিক্ষণ ও সরকারি<br />সহযোগী প্রতিষ্ঠান</span>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
            <p>{SITE.footer.copyright}</p>
            <p className="flex items-center gap-1.5">
              ভালোবাসা দিয়ে বানিয়েছে দ্বিতীয় ব্যাচ-এর শিক্ষার্থীরা
              <Heart className="h-3.5 w-3.5 fill-flag text-flag" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}