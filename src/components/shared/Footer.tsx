import { SITE } from "@/content";
import { ETrainingMark, InstitutionalLockup, JuboUnnoyonMark } from "../BrandLogos";
import { FacebookIcon, YoutubeIcon } from "../brands";
import { GraduationCap, Heart, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
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
            {/* <DydMark className="h-11 w-9" /> */}
            <JuboUnnoyonMark className="h-10 w-10" />
            <span className="text-xs leading-snug text-white/70">প্রশিক্ষণ ও সরকারি<br />সহযোগী প্রতিষ্ঠান</span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <p>{SITE.footer.copyright}</p>
          <p className="flex items-center gap-1.5">
            ডিজাইন ও ডেভেলপ করেছে <span className="font-semibold text-white">এআই কোর্স • দ্বিতীয় ব্যাচ</span>-এর শিক্ষার্থীরা
            <Heart className="h-3.5 w-3.5 fill-flag text-flag animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};