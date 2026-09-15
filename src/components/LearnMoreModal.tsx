import { useState, useEffect } from 'react';
import {
  X,
  Rocket,
  BadgeCheck,
  Video,
  DollarSign,
  Brain,
  Globe,
  Check,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    icon: Rocket,
    title: 'Step 1: Secure Your Pre-Order Account',
    description:
      'Pre-register before 30 September 2026 to lock in the lowest eligibility targets (300 subscribers & 30K views) and discounted pre-launch pricing.',
  },
  {
    icon: BadgeCheck,
    title: 'Step 2: Instant Access & Verification Badge',
    description:
      'Receive early access login details and your official Verification Badge (Blue for Standard, Purple for Premium, VIP Gold for Partners).',
  },
  {
    icon: Video,
    title: 'Step 3: Create & Publish Content',
    description:
      'Leverage built-in AI Advanced Tools for scriptwriting, auto-editing, and video creation directly inside the Crown Mega ecosystem.',
  },
  {
    icon: DollarSign,
    title: 'Step 4: Fast Monetization & Monthly Salary',
    description:
      'Meet your simple pre-launch criteria, earn a flat $2.40 CPM globally without regional restrictions, and receive your payouts within 2 hours.',
  },
];

const comparisonRows = [
  { label: 'Monetization Target', preLaunch: '300 Subscribers & 30K Views', postLaunch: '800 Subscribers & 80K Views' },
  { label: 'Account Cost', preLaunch: 'Discounted ($5 / $10 / $200)', postLaunch: 'Higher standard prices' },
  { label: 'Monthly Salary', preLaunch: '100% Salary Allocation', postLaunch: 'Reduced / Tiered rates' },
  { label: 'Verification Badge', preLaunch: 'Included with Pre-Order', postLaunch: 'Requires separate criteria' },
  { label: 'Payout Threshold', preLaunch: 'Instant starting at $10', postLaunch: 'Standard threshold' },
];

const aiFeatures = [
  {
    icon: Brain,
    title: 'Lifetime Access to AI Premium Tools',
    description:
      "Generate high-engaging video scripts, automated thumbnails, and localized voiceovers using Crown Mega's cutting-edge AI suite.",
  },
  {
    icon: Globe,
    title: '22+ Integrated Social Platforms',
    description:
      'As part of the Crown Network ecosystem, your content gains cross-platform visibility across streaming, live video, and social networks worldwide.',
  },
  {
    icon: DollarSign,
    title: 'Global $2.40 CPM',
    description:
      'Earn identical rates regardless of whether your audience is in Asia, Europe, or the Americas \u2014 zero location penalty.',
  },
];

const faqs = [
  {
    question: 'What happens after I pre-order?',
    answer:
      'You will immediately receive a pre-order confirmation via email. Your account credentials, verified creator status, and early dashboard access will be dispatched ahead of our official launch on 15 October 2026.',
  },
  {
    question: 'How does the $2.40 CPM work?',
    answer:
      'Unlike traditional platforms that pay lower rates for certain regions, Crown Mega maintains a flat $2.40 CPM rate globally for monetized video views, ensuring predictable earnings for every creator.',
  },
  {
    question: 'What are the requirements for the Monthly Creator Salary?',
    answer:
      'Hardworking creators who maintain regular video publishing schedules and hit monthly engagement goals are eligible for fixed monthly salary bonuses on top of their standard CPM earnings.',
  },
  {
    question: 'How fast are payout requests processed?',
    answer:
      "Payout requests are processed within 2 hours once you reach the minimum withdrawal threshold of $10. You don't have to wait until the end of the month or reach $100 to get paid.",
  },
  {
    question: 'Is my pre-order purchase refundable?',
    answer:
      'Yes! If Crown Mega does not meet its launch specifications or features as described, pre-order buyers are covered under our full launch-guarantee protection policy.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-blue rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-white md:text-base">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-blue-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative my-8 w-full max-w-4xl animate-fade-up rounded-3xl border border-blue-500/20 bg-[#0a0f1e] p-6 shadow-2xl shadow-blue-900/50 md:p-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/15 text-blue-300 transition hover:bg-blue-600/30 hover:text-white md:right-6 md:top-6"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-shining-blue animate-pulse" />
            <span className="text-xs font-medium text-blue-200">Crown Mega Platform Guide</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Everything You Need to Know About Crown Mega
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
            Discover how Crown Mega is revolutionizing content creation, monetization, and AI tools for creators worldwide.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {['Transparent Payouts', 'Guaranteed CPM', 'Creator Monthly Salaries'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* How Crown Mega Works */}
        <div className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-white">How Crown Mega Works</h3>
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-blue flex items-start gap-4 rounded-2xl p-5 transition hover:border-blue-500/40"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-shining-blue shadow-lg shadow-blue-600/25">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white md:text-base">{step.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Pre-Order Comparison Table */}
        <div className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-white">Why Pre-Order Before Launch?</h3>
          <div className="overflow-hidden rounded-2xl border border-blue-500/15">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-blue-500/15 bg-blue-600/10">
                  <th className="px-5 py-4 font-semibold text-gray-300">Feature</th>
                  <th className="px-5 py-4 font-semibold text-blue-300">Pre-Launch (Before 30 Sept)</th>
                  <th className="px-5 py-4 font-semibold text-red-300/70">Post-Launch (After 15 Oct)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-blue-500/10 last:border-0">
                    <td className="px-5 py-4 font-medium text-white">{row.label}</td>
                    <td className="px-5 py-4 text-gray-300">
                      <div className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                        <span>{row.preLaunch}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-500">
                      <div className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400/60" />
                        <span>{row.postLaunch}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advanced AI Tools & Ecosystem */}
        <div className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-white">Advanced AI Tools & Crown Network Ecosystem</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {aiFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass-blue rounded-2xl p-5 transition hover:border-blue-500/40">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-shining-blue shadow-lg shadow-blue-600/20">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="mb-2 text-sm font-bold text-white">{feature.title}</h4>
                  <p className="text-xs leading-relaxed text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h3 className="mb-6 text-xl font-bold text-white">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-600/15 to-blue-900/10 p-8 text-center">
          <h3 className="text-xl font-extrabold text-white md:text-2xl">
            Ready to Turn Your Content into a Real Career?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
            Don't miss the pre-launch benefits before registrations close on 30 September 2026.
          </p>
          <a
            href="#pricing"
            onClick={onClose}
            className="group mt-6 inline-flex items-center gap-2 rounded-2xl bg-shining-blue px-8 py-4 font-bold text-white shadow-2xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/50"
          >
            Choose Your Creator Plan & Pre-Order Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
            }
