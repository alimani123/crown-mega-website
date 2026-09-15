import { useState, useRef, useEffect } from 'react';
import {
  Check,
  Sparkles,
  Crown,
  Rocket,
  Clock,
  Brain,
  Wallet,
  Headphones,
  Users,
  Globe,
  DollarSign,
  Award,
  ArrowRight,
  AlertCircle,
  X,
  Target,
  Calendar,
  Network,
  Video,
  MessageCircle,
  Radio,
  BookOpen,
  Bot,
  Eye,
  Megaphone,
  Share2,
  Smartphone,
  ShoppingBag,
  CloudLightning,
  Zap,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import LearnMoreModal from '@/components/LearnMoreModal';


const handleSafepayCheckout = (usdAmount: any) => {
  const pkrAmount = Number(usdAmount) * 280;
  const win = window as any;

  // Check if Safepay SDK is loaded
  if (win.Safepay && win.Safepay.Checkout) {
    try {
      const checkout = new win.Safepay.Checkout({
        environment: 'production',
        key: 'pub_e88c4638-6c5c-4806-8531-26d6da39d779',
        amount: pkrAmount,
        currency: 'PKR',
        tracker: 'order_' + Date.now()
      });
      
      // Open Safepay Embedded/Popup Checkout directly
      checkout.render({
        paymentMethod: 'card'
      });
    } catch (e) {
      console.error(e);
      alert("Payment gateway load hone mein masla hai. Dobara koshish karein.");
    }
  } else {
    // Agar SDK load nahi hua toh user ko alert dikhayein taake page crash na ho
    alert("Safepay SDK load ho raha hai, bara-e-karam aik baar phir click karein.");
  }
};


// ============================================================
// PRICING DATA
// ============================================================

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: number;
  badgeColor: string;
  badgeText: string;
  borderColor: string;
  glowColor: string;
  icon: typeof Crown;
  features: PlanFeature[];
  isFeatured?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Standard',
    price: 5,
    badgeColor: 'bg-blue-500',
    badgeText: 'Standard',
    borderColor: 'border-blue-500/40',
    glowColor: 'hover:shadow-blue-500/20',
    icon: Check,
    features: [
      { text: 'Easy monetization (300 subscribers & 30K views target)' },
      { text: 'Full platform integration with AI tools' },
      { text: 'Monthly salary option (Only for hardworking creators)' },
      { text: 'Payout within 2 hours' },
      { text: 'Standard blue tick verification badge' },
      { text: 'CPM - $2.40 (No region-wise restrictions)' },
      { text: 'Full freedom for creators' },
    ],
  },
  {
    name: 'Premium',
    price: 10,
    badgeColor: 'bg-purple-500',
    badgeText: 'Premium',
    borderColor: 'border-purple-500/40',
    glowColor: 'hover:shadow-purple-500/20',
    icon: Sparkles,
    features: [
      { text: 'Easy monetization (300 subscribers & 30K views target)' },
      { text: 'Full platform integration with AI premium tools' },
      { text: 'Monthly salary option (Only for hardworking creators)' },
      { text: 'Payout within 2 hours' },
      { text: 'Premium purple tick verification badge' },
      { text: 'CPM - $2.40 (No region-wise restrictions)' },
      { text: 'Full freedom for creators' },
    ],
  },
  {
    name: 'VIP Partner',
    price: 200,
    badgeColor: 'bg-gradient-to-r from-amber-400 to-yellow-600',
    badgeText: 'VIP Partner',
    borderColor: 'border-amber-500/50',
    glowColor: 'hover:shadow-amber-500/30',
    icon: Crown,
    isFeatured: true,
    features: [
      { text: 'Easy monetization (300 subscribers & 30K views target)' },
      { text: 'Full platform integration with all AI premium tools & advanced technology' },
      { text: 'Monthly salary option (Only for hardworking creators)' },
      { text: 'Payout within 2 hours' },
      { text: 'VIP yellow gold tick verification badge' },
      { text: 'CPM - $2.40 (No region-wise restrictions)' },
      { text: 'Full freedom for creators' },
      { text: 'Dedicated Account Manager' },
    ],
  },
];

// ============================================================
// HERO FEATURE BADGES
// ============================================================

const heroFeatures = [
  { icon: Rocket, label: 'Fast monetization' },
  { icon: Clock, label: 'Payout within 2 hours' },
  { icon: Brain, label: 'AI advanced tools' },
  { icon: Wallet, label: 'Monthly salaries' },
  { icon: DollarSign, label: '$2.40 CPM' },
];

// ============================================================
// WHY CHOOSE CROWN MEGA FEATURES
// ============================================================

const whyChooseFeatures = [
  { icon: Rocket, title: 'Easy monetization' },
  { icon: Clock, title: 'Fast payouts within 2 hours' },
  { icon: Brain, title: 'Full advanced AI premium tools lifetime & advanced technology' },
  { icon: Wallet, title: 'Monthly salaries for hardworking creators' },
  { icon: Headphones, title: '24/7 customer support' },
  { icon: DollarSign, title: 'No wait for $100 & $200 — request payout with just $10' },
  { icon: Users, title: '3,000+ expert team members worldwide' },
  { icon: Award, title: 'Crown Mega gives everyone the opportunity to build a career' },
  { icon: Globe, title: 'Crown Network has 22 other social platforms running in addition to Crown Mega' },
  { icon: Target, title: 'A great opportunity for creators to build their career' },
];

// ============================================================
// COMPARISON DATA
// ============================================================

const preLaunchBenefits = [
  '300 subscribers target & 30K views target',
  'Account prices low',
  '100% salary (No drop)',
];

const postLaunchBenefits = [
  '800 subscribers target & 80K views target',
  'Account prices very high',
  '50% salary & 50% salary drop',
];

// ============================================================
// TRUST FEATURES DATA
// ============================================================

interface TrustFeature {
  icon: typeof Crown;
  title: string;
  description: string;
}

const trustFeatures: TrustFeature[] = [
  {
    icon: Zap,
    title: 'Easy & Fast Monetization',
    description:
      'Get your content monetized quickly with simple approval workflows and hassle-free onboarding.',
  },
  {
    icon: Clock,
    title: 'Payout Within 2 Hours',
    description:
      'Enjoy lightning-fast earnings processing directly into your preferred account within 2 hours.',
  },
  {
    icon: Brain,
    title: 'AI Advanced Tools',
    description:
      'Leverage state-of-the-art AI generation and analytics tools to supercharge your content workflow.',
  },
  {
    icon: Calendar,
    title: 'Monthly Salaries',
    description:
      'Earn stable, recurring monthly payments and performance bonuses based on your consistent engagement.',
  },
  {
    icon: TrendingUp,
    title: 'Top CPM Rates',
    description:
      'Maximize your revenue potential with industry-leading CPM rates tailored for creator monetization.',
  },
  {
    icon: ShieldCheck,
    title: '100% Transparency',
    description:
      'Track your views, analytics, and revenue real-time with zero hidden fees or hidden terms.',
  },
];

// ============================================================
// TRUST CAROUSEL COMPONENT
// ============================================================

const TRUST_AUTOPLAY_MS = 3500;

function TrustCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number, dir: number) => {
    setDirection(dir);
    setActiveIdx((idx + trustFeatures.length) % trustFeatures.length);
  };

  const next = (idx: number) => goTo(idx + 1, 1);
  const goToSlide = (idx: number) => goTo(idx, idx > activeIdx ? 1 : -1);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => next(activeIdx), TRUST_AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIdx, isPaused]);

  const activeFeature = trustFeatures[activeIdx];
  const ActiveIcon = activeFeature.icon;

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel viewport */}
      <div className="relative w-full max-w-2xl">
        <div className="relative h-[360px] overflow-hidden md:h-[340px]">
          {trustFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = idx === activeIdx;
            const slideOutLeft = !isActive && direction === 1 && idx === (activeIdx - 1 + trustFeatures.length) % trustFeatures.length;
            const slideOutRight = !isActive && direction === -1 && idx === (activeIdx + 1) % trustFeatures.length;
            const slideInRight = !isActive && direction === 1 && idx === (activeIdx + 1) % trustFeatures.length;
            const slideInLeft = !isActive && direction === -1 && idx === (activeIdx - 1 + trustFeatures.length) % trustFeatures.length;

            let positionClass = '';
            if (isActive) positionClass = 'translate-x-0 opacity-100 scale-100 z-20';
            else if (slideOutLeft) positionClass = '-translate-x-full opacity-0 scale-95 z-10';
            else if (slideOutRight) positionClass = 'translate-x-full opacity-0 scale-95 z-10';
            else if (slideInRight) positionClass = 'translate-x-full opacity-0 scale-95 z-10';
            else if (slideInLeft) positionClass = '-translate-x-full opacity-0 scale-95 z-10';
            else positionClass = 'opacity-0 scale-95 pointer-events-none z-0';

            return (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${positionClass}`}
              >
                <div className="group relative w-full overflow-hidden rounded-3xl border border-blue-500/40 bg-slate-900/80 p-10 text-center shadow-2xl shadow-blue-600/20 backdrop-blur-xl md:p-12">
                  {/* Top glow line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
                  {/* Bottom glow line */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                  {/* Icon */}
                  <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl bg-shining-blue shadow-xl shadow-blue-600/40 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto max-w-lg text-base leading-relaxed text-gray-400">
                    {feature.description}
                  </p>

                  {/* Card counter */}
                  <span className="mt-7 inline-block rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
                    {idx + 1} / {trustFeatures.length}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex items-center gap-3">
        {trustFeatures.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to feature ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-400 ${
              idx === activeIdx
                ? 'w-8 bg-shining-blue shadow-lg shadow-blue-600/50'
                : 'w-2.5 bg-blue-500/25 hover:bg-blue-500/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// CONNECTED PLATFORMS DATA
// ============================================================

interface ConnectedPlatform {
  name: string;
  icon: typeof Crown;
  isHighlighted?: boolean;
}

const connectedPlatforms: ConnectedPlatform[] = [
  { name: 'Swit', icon: Share2 },
  { name: 'Weverse', icon: Globe },
  { name: 'PDB Personality', icon: Brain },
  { name: 'buz', icon: Megaphone },
  { name: 'Truth Social', icon: MessageCircle },
  { name: 'StreamKar', icon: Video },
  { name: 'SK Lite', icon: Smartphone },
  { name: 'Chamet', icon: Radio },
  { name: 'VOVA Group', icon: ShoppingBag },
  { name: 'Connected2', icon: Network },
  { name: 'WorldFirst', icon: Globe },
  { name: 'TwitCasting', icon: Radio },
  { name: 'KIRI Engine', icon: CloudLightning },
  { name: 'Serializd', icon: BookOpen },
  { name: 'Genspark AI', icon: Bot },
  { name: 'Learn AI Courses', icon: BookOpen },
  { name: 'Brilliant', icon: Award },
  { name: 'MoonLive', icon: Radio },
  { name: 'Peegle Live', icon: Eye },
  { name: 'COS.TV', icon: Video },
  { name: 'Unseen Chat', icon: MessageCircle },
  { name: 'Jodel', icon: MessageCircle },
  { name: 'Crown Mega', icon: Crown, isHighlighted: true },
];

// ============================================================
// PRICING CARD COMPONENT
// ============================================================

function PricingCard({ plan }: { plan: PricingPlan }) {
  const Icon = plan.icon;

  return (
    <div
      className={`relative glass rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${plan.borderColor} ${plan.glowColor} ${
        plan.isFeatured ? 'animate-pulse-glow-gold border-2' : 'border'
      }`}
    >
      {plan.isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 px-4 py-1.5 text-xs font-bold text-black shadow-lg">
            <Crown className="h-3.5 w-3.5" />
            MOST EXCLUSIVE
          </div>
        </div>
      )}

      {/* Badge */}
      <div className="mb-6 flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${plan.badgeColor} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
          <span className={`mt-1 inline-block rounded-full ${plan.badgeColor} px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white`}>
            {plan.badgeText}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mb-2 flex items-baseline gap-2">
        <span className="text-5xl font-extrabold text-white">${plan.price}</span>
      </div>
      <p className="mb-6 text-sm text-gray-400">One-time payment</p>

      <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Features */}
      <ul className="mb-8 space-y-3.5">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${plan.badgeColor}`}>
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm leading-relaxed text-gray-300">{feature.text}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
         <button
      onClick={() => handleSafepayCheckout(plan.price)}
      className={`w-full rounded-2xl py-4 font-bold transition-all duration-300 ${
        plan.isFeatured
          ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-black hover:from-amber-300 hover:to-yellow-500 hover:shadow-lg hover:shadow-amber-500/40'
          : plan.name === 'Premium'
            ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-400 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/40'
            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/40'
      }`}
    >
      Pre-Order Buy
    </button>
      
      
      
      

    </div>
  );
}

// ============================================================
// APP
// ============================================================

function App() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b16]">
      {/* Ambient background orbs — dark blue theme */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-700/15 blur-[120px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute left-1/2 top-[60%] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-800/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-shining-blue shadow-lg shadow-blue-600/30">
            <Crown className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white">Crown Mega</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#pricing" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#comparison" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Benefits</a>
          <a href="#why-choose" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Why Us</a>
          <a href="#platforms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Network</a>
        </div>
      </nav>

      {/* Launch Notice Banner */}
      <div className="relative z-40 mx-auto max-w-5xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-blue-500/25 bg-blue-600/10 px-6 py-4 text-center backdrop-blur sm:flex-row sm:gap-3">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-5 w-5 flex-shrink-0 text-blue-400" />
            <p className="text-sm font-medium text-blue-200">
              Crown Mega officially launches on 15 October 2026.
            </p>
          </div>
          <div className="hidden h-4 w-px bg-blue-500/30 sm:block" />
          <p className="text-sm font-medium text-white">
            Pre-launch registrations and purchasing close on 30 September 2026.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-16 pb-16 text-center md:pt-20 md:pb-20">
        {/* Top Tag */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-shining-blue animate-pulse" />
          <span className="text-xs font-medium text-blue-200">Part of the Crown Network Ecosystem</span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-up max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl md:leading-tight">
          Turn Your Content Into
          <br />
          <span className="text-shining-blue">A Real Career</span>
        </h1>

        {/* Sub-header Paragraph */}
        <p className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
          Crown Mega aims to help every creator build their own career. Crown Mega is here to solve all the
          problems of creators with easy monetization models, fast payouts, and the option of salaries for its
          hardworking creators.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="group flex items-center gap-2 rounded-2xl bg-shining-blue px-8 py-4 font-bold text-white shadow-2xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/50"
          >
            Explore Creator Plans
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => setIsLearnMoreOpen(true)}
              className="rounded-2xl border border-blue-500/20 bg-blue-600/10 px-8 py-4 font-semibold text-blue-200 backdrop-blur transition hover:bg-blue-600/20 hover:text-blue-100"
            >
              Learn More
            </button>
            <span className="text-xs text-gray-500">Pre-launch details</span>
          </div>
        </div>

        {/* Hero Feature Badges */}
        <div className="animate-fade-up mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {heroFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-600/8 px-4 py-2.5 backdrop-blur transition hover:border-blue-500/30 hover:bg-blue-600/15"
              >
                <Icon className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-gray-300">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Pricing Plans
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Choose the plan that fits your creator journey. Every plan includes full freedom,
              fast payouts, and industry-leading CPM rates.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-gray-500">
            All plans include full freedom for creators. One-time payment. Payouts processed within 2 hours.
          </p>
        </div>
      </section>

      {/* Pre-Launch vs Post-Launch Comparison Section */}
      <section id="comparison" className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Pre-Launch vs Post-Launch Benefits
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Get in early and lock in the best rates and lowest targets before we launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Before Launching */}
            <div className="glass-blue rounded-3xl p-8 transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/20">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-shining-blue shadow-lg shadow-blue-600/30">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Buying Before Launching</h3>
                  <span className="text-xs font-medium text-blue-400">Pre-Launch</span>
                </div>
              </div>

              <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              <ul className="space-y-4">
                {preLaunchBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-shining-blue">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm leading-relaxed text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* On or After Launching */}
            <div className="glass rounded-3xl border border-red-500/20 p-8 transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-600/10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/20 shadow-lg">
                  <AlertCircle className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Buying On or After Launching</h3>
                  <span className="text-xs font-medium text-red-400">Post-Launch</span>
                </div>
              </div>

              <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

              <ul className="space-y-4">
                {postLaunchBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20">
                      <X className="h-3.5 w-3.5 text-red-400" />
                    </div>
                    <span className="text-sm leading-relaxed text-gray-400">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Crown Mega Section */}
      <section id="why-choose" className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Why Choose Crown Mega?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              We provide everything creators need to turn their passion into a real, sustainable career.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyChooseFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-blue group rounded-2xl p-6 transition-all duration-500 hover:scale-[1.03] hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-600/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-shining-blue shadow-lg shadow-blue-600/25 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connected Platforms Section */}
      <section id="platforms" className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Social Platforms Connected to the Crown Network
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Seamlessly expanding your reach across next-generation social, AI, live-streaming, and creator ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {connectedPlatforms.map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-[1.04] ${
                    platform.isHighlighted
                      ? 'glass-blue border-2 border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/30 animate-pulse-glow-blue'
                      : 'glass-blue hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-600/15'
                  }`}
                >
                  {platform.isHighlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 rounded-full bg-shining-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/40">
                        <Sparkles className="h-3 w-3" />
                        Coming Soon
                      </div>
                    </div>
                  )}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                    platform.isHighlighted
                      ? 'bg-shining-blue shadow-lg shadow-blue-600/40'
                      : 'bg-blue-600/15 shadow-lg shadow-blue-600/10'
                  }`}>
                    <Icon className={`h-7 w-7 ${platform.isHighlighted ? 'text-white' : 'text-blue-400'}`} />
                  </div>
                  <span className={`text-sm font-medium ${platform.isHighlighted ? 'text-white' : 'text-gray-300'}`}>
                    {platform.name}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            22 platforms currently live in the Crown Network, with Crown Mega launching soon.
          </p>
        </div>
      </section>

      {/* Trust Features Section */}
      <section id="trust" className="relative z-10 overflow-hidden px-6 py-16 md:py-24">
        {/* Glowing blue background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />
          <div className="absolute right-1/4 bottom-10 h-80 w-80 translate-x-1/2 rounded-full bg-blue-800/15 blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Crown Mega is the Name of Trust
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
              Empower your content creation journey with instant payouts, industry-leading CPM rates,
              and cutting-edge AI tools built for creator growth.
            </p>
          </div>

          {/* Auto-play Carousel */}
          <TrustCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-500/10 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-shining-blue">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold text-white">Crown Mega</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 Crown Mega. All rights reserved.</p>
        </div>
      </footer>

      {/* Learn More Modal */}
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </div>
  );
}

export default App;
