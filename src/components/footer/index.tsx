import React from "react";
import Link from "next/link";
import ArrowLeftIcon from "../icons/arrow-left-icon";
import WorldIcon from "../icons/world-icon";
import AccessibilityIcon from "../icons/accessibility-icon";

export const Footer = (): React.ReactElement => {
  return (
    <div className="bg-[var(--blue-gray-900)] pt-12 lg:pt-20">
      <div className="home-container grid gap-8">
        <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-6">
          <img src="/images/logo-white.svg" alt="UTeach logo" className="w-auto" />

          {/* Product section */}
          <div className="text-[var(--blue-gray-100)] grid">
            <h4 className="font-medium py-3">Product</h4>
            <Link href="#" className="py-3">
              Pricing
            </Link>
            <Link href="#" className="py-3">
              Overview
            </Link>
            <Link href="#" className="py-3">
              Browse
            </Link>
            <Link href="#" className="py-3 flex gap-2">
              Accessibility
              <span
                className={`text-sm inline-block px-2 py-0.5 rounded-sm text-[var(--purple-800)] bg-[var(--purple-100)]`}
              >
                BETA
              </span>
            </Link>
          </div>
          {/* Solutions section */}
          <div className="text-[var(--blue-gray-100)] grid">
            <h4 className="font-medium py-3">Solutions</h4>
            <Link href="#" className="py-3">
              Brainstorming
            </Link>
            <Link href="#" className="py-3">
              Ideation
            </Link>
            <Link href="#" className="py-3">
              Wireframing
            </Link>
            <Link href="#" className="py-3">
              Research
            </Link>
          </div>
          {/* Resources section */}
          <div className="text-[var(--blue-gray-100)] grid">
            <h4 className="font-medium py-3">Resources</h4>
            <Link href="#" className="py-3">
              Help Center
            </Link>
            <Link href="#" className="py-3">
              Blog
            </Link>
            <Link href="#" className="py-3">
              Tutorials
            </Link>
            <Link href="#" className="py-3">
              FAQs
            </Link>
          </div>
          {/* Resources section */}
          <div className="text-[var(--blue-gray-100)] grid">
            <h4 className="font-medium py-3">Support</h4>
            <Link href="#" className="py-3">
              Contact Us
            </Link>
            <Link href="#" className="py-3">
              Developers
            </Link>
            <Link href="#" className="py-3">
              Documentation
            </Link>
            <Link href="#" className="py-3">
              Integrations
            </Link>
          </div>
          {/* Company section */}
          <div className="text-[var(--blue-gray-100)] grid">
            <h4 className="font-medium py-3">Company</h4>
            <Link href="#" className="py-3">
              About
            </Link>
            <Link href="#" className="py-3">
              Press
            </Link>
            <Link href="#" className="py-3">
              Events
            </Link>
            <Link href="#" className="py-3 flex items-center gap-2">
              Request Demo
              <ArrowLeftIcon className="text-white" />
            </Link>
          </div>
        </div>

        {/* Copyright section */}
        <div className="text-white py-6 grid gap-6 border-t border-slate-600 lg:mt-[50px]">
          <span>uteach @ 2023. All rights reserved.</span>
          <div className="flex items-center justify-between my-3">
            <span>Terms</span>
            <span>Privacy</span>
            <span className="flex items-center gap-2">
              <WorldIcon />
              EN
            </span>
            <span>EUR</span>
            <AccessibilityIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
