import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  TagIcon,
  ReceiptPercentIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
  GlobeAltIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import GoToTop from '../components/GoToTop';

const serviceCategories = [
  {
    title: 'Startup',
    description: 'Illustrative topics that may arise for new ventures.',
    icon: RocketLaunchIcon,
    items: [
      'Private limited / LLP incorporation',
      'Startup India and DPIIT-related filings',
      'Founders’ agreements and cap-table documentation',
      'Early-stage compliance and company-law support',
      'ESOP and shareholders’ agreement support (with other advisers as needed)',
    ],
  },
  {
    title: 'Registration',
    description: 'Illustrative statutory registrations relevant to operating entities.',
    icon: DocumentTextIcon,
    items: [
      'Company formation (Pvt Ltd, OPC, LLP)',
      'Partnership firm registration',
      'MSME / Udyam registration',
      'Shops and establishment licences',
      'Professional tax and labour-related registrations',
    ],
  },
  {
    title: 'Trademark',
    description: 'Illustrative intellectual property filing and related work.',
    icon: TagIcon,
    items: [
      'Trademark search, filing, and prosecution',
      'Opposition, rectification, and hearings',
      'Renewals and portfolio maintenance',
      'Copyright and design filings, where applicable',
      'Licensing and assignment documentation',
    ],
  },
  {
    title: 'GST',
    description: 'Illustrative indirect tax compliance and registration matters.',
    icon: ReceiptPercentIcon,
    items: [
      'GST registration, amendment, and cancellation',
      'Periodic returns (e.g. GSTR-1, GSTR-3B, CMP-08)',
      'Annual returns (e.g. GSTR-9 / GSTR-9C, where applicable)',
      'ITC reconciliation and mismatch-related work',
      'E-way bill, LUT, and refund-related support',
    ],
  },
  {
    title: 'Income Tax',
    description: 'Illustrative direct tax compliance and related matters.',
    icon: BanknotesIcon,
    items: [
      'Business and professional return filing',
      'TDS compliance, Form 16 / 16A, and 26AS review',
      'Advance tax and related estimates',
      'Tax audit coordination, where applicable',
      'Assessment proceedings and representation, where engaged',
    ],
  },
  {
    title: 'MCA',
    description: 'Illustrative Ministry of Corporate Affairs filings and processes.',
    icon: BuildingLibraryIcon,
    items: [
      'Name approval and incorporation-related filings',
      'DIN / DIR-3 KYC and director-related changes',
      'Annual filings (e.g. AOC-4, MGT-7 / MGT-7A)',
      'Event-based forms (e.g. CHG, SH-7, PAS-3)',
      'Strike-off, revival, and compounding-related routes',
    ],
  },
  {
    title: 'Compliance',
    description: 'Illustrative company secretarial and payroll-linked statutory work.',
    icon: ClipboardDocumentCheckIcon,
    items: [
      'Board and shareholder documentation',
      'Statutory registers and minute books',
      'ROC compliance tracking and reminders',
      'Payroll-linked PF, ESIC, and PT filings',
      'Secretarial audit readiness',
    ],
  },
  {
    title: 'Global',
    description: 'Illustrative cross-border and India inbound reporting matters.',
    icon: GlobeAltIcon,
    items: [
      'Liaison, branch, and project office routes',
      'FEMA / RBI reporting and filings',
      'Inbound investment and related documentation',
      'Coordination with overseas counsel',
      'DTAA and withholding matters (with tax advisers as needed)',
    ],
  },
  {
    title: 'Other mandates',
    description: 'Broader or multi-topic instructions are scoped in writing with the client.',
    icon: Squares2X2Icon,
    highlight: true,
    items: [
      'Compliance calendars and monitoring',
      'Retainer-style company secretarial support',
      'Transaction and diligence support',
      'Other scopes agreed in an engagement letter',
    ],
  },
];

const ComplianceDeskPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero_2.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs sm:text-sm font-semibold text-primary-200 uppercase tracking-wider mb-3">
              Legaloids
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4">
              Compliance Desk
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4 leading-relaxed">
              General information on compliance and corporate regulatory topics. This page is for informational purposes
              only and does not constitute legal advice.
            </p>
            <div className="mt-8 flex justify-center px-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-700 text-white font-semibold hover:bg-primary-600 transition-colors duration-200 shadow-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="service-catalogue" className="py-12 sm:py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              Information only
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto mb-4">
              Illustrative areas (non-exhaustive)
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The following lists are general in nature. Any mandate is subject to conflict checks, agreed scope, and
              terms confirmed with the firm in writing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <article
                  key={cat.title}
                  className={`rounded-xl border bg-white p-6 sm:p-8 flex flex-col transition-shadow duration-200 hover:shadow-md ${
                    cat.highlight
                      ? 'md:col-span-2 xl:col-span-3 border-primary-200 bg-primary-50/40'
                      : 'border-gray-200 hover:border-primary-200'
                  }`}
                >
                  <div className="flex gap-4 mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{cat.title}</h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mt-auto">
                    {cat.items.map((line) => (
                      <li
                        key={line}
                        className="text-sm sm:text-base pl-4 border-l-2 border-primary-600/40 text-gray-700 leading-snug"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  {cat.highlight && (
                    <div className="mt-8 pt-6 border-t border-primary-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-sm text-gray-700">
                        To discuss whether the firm can assist on a specific matter, please use the contact page.
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-primary-700 text-white font-semibold hover:bg-primary-600 transition-colors shrink-0"
                      >
                        Contact
                      </Link>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Specific legal advice</h3>
          <p className="text-primary-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Advice depends on the facts and the law applicable at the relevant time. If you wish to instruct the firm,
            please make contact through the channels provided on this website.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-white text-primary-900 font-semibold hover:bg-primary-50 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </section>

      <GoToTop />
    </>
  );
};

export default ComplianceDeskPage;
