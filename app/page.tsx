"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

/* ───────────────────────── DATA ───────────────────────── */

const PLANS = [
  {
    name: "Starter",
    price: 149,
    priceId: "price_starter_monthly",
    features: [
      "5 AI agents",
      "10,000 tasks / month",
      "Basic field templates",
      "Email support",
      "Standard analytics",
    ],
  },
  {
    name: "Pro",
    price: 299,
    priceId: "price_pro_monthly",
    popular: true,
    features: [
      "25 AI agents",
      "100,000 tasks / month",
      "Custom workflows",
      "Priority support",
      "Advanced analytics",
      "API access",
    ],
  },
  {
    name: "Business",
    price: 599,
    priceId: "price_business_monthly",
    features: [
      "100 AI agents",
      "500,000 tasks / month",
      "Multi-team management",
      "Dedicated CSM",
      "Real-time dashboards",
      "SSO / SAML",
    ],
  },
  {
    name: "Enterprise",
    price: 1499,
    priceId: "price_enterprise_monthly",
    features: [
      "Unlimited agents",
      "Unlimited tasks",
      "On-prem deployment",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantees",
      "Audit logs",
    ],
  },
];

const STEPS = [
  {
    num: "01",
    title: "DEFINE YOUR MISSION",
    desc: "Configure agent objectives, field parameters, and compliance rules through our intuitive command interface.",
  },
  {
    num: "02",
    title: "DEPLOY AGENTS",
    desc: "Launch autonomous AI agents into the field. They adapt to terrain, conditions, and real-time data streams.",
  },
  {
    num: "03",
    title: "MONITOR & OPTIMIZE",
    desc: "Track agent performance on live dashboards. The system learns and optimizes routes, decisions, and outcomes.",
  },
  {
    num: "04",
    title: "SCALE OPERATIONS",
    desc: "Expand from a single site to global operations. Agents coordinate across regions with zero added complexity.",
  },
];

const USE_CASES = [
  {
    icon: "⚡",
    title: "Infrastructure Inspection",
    desc: "AI agents autonomously inspect power lines, pipelines, and structural assets — flagging anomalies before they become failures.",
  },
  {
    icon: "🛡️",
    title: "Compliance Monitoring",
    desc: "Continuous regulatory compliance tracking across sites. Agents audit in real time and generate audit-ready reports.",
  },
  {
    icon: "📦",
    title: "Logistics & Delivery",
    desc: "Optimize last-mile delivery, warehouse operations, and fleet routing with agents that adapt to live conditions.",
  },
  {
    icon: "🌍",
    title: "Environmental Monitoring",
    desc: "Deploy sensor-connected agents that track air quality, water levels, and soil conditions across remote sites.",
  },
  {
    icon: "🏗️",
    title: "Construction Management",
    desc: "Agents monitor progress, safety compliance, and resource allocation across multi-site construction projects.",
  },
  {
    icon: "🔒",
    title: "Security Operations",
    desc: "Autonomous perimeter monitoring, threat detection, and incident response coordination powered by AI.",
  },
];

const FAQS = [
  {
    q: "What are FieldMatrix AI agents?",
    a: "FieldMatrix agents are autonomous AI systems designed for real-world field operations. They process sensor data, satellite imagery, IoT feeds, and operational databases to make decisions, trigger actions, and generate reports — all without human intervention.",
  },
  {
    q: "How quickly can I deploy agents?",
    a: "Most customers have their first agents operational within 24 hours. Our pre-built templates cover common use cases like inspections, compliance, and logistics. Custom workflows typically take 3-5 days to configure and test.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified, GDPR compliant, and offer on-premise deployment for Enterprise customers with strict data sovereignty requirements.",
  },
  {
    q: "Can agents work offline or in remote areas?",
    a: "Yes. Agents are designed for edge deployment and can operate with intermittent or no connectivity. They sync data when connections are available and maintain full operational capability offline.",
  },
  {
    q: "What integrations do you support?",
    a: "We integrate with all major platforms including Salesforce, ServiceNow, SAP, Oracle, AWS IoT, Azure IoT Hub, and hundreds more via our REST API and webhook system. Custom integrations are available on Business and Enterprise plans.",
  },
  {
    q: "Can I cancel or change my plan anytime?",
    a: "Yes. All plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel at any time. Changes take effect at the start of your next billing cycle.",
  },
];

/* ───────────────────────── COMPONENT ──────────────────── */

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  async function handleCheckout(priceId: string) {
    setLoadingPlan(priceId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const { sessionId } = await res.json();
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="grid-bg relative min-h-screen overflow-hidden">
      {/* ──── NAV ──── */}
      <nav className="fixed top-0 z-50 w-full border-b border-cyan-500/10 bg-navy-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl tracking-wider text-white">
            FIELD<span className="text-cyan-400">MATRIX</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm text-slate-400 transition hover:text-cyan-400">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-slate-400 transition hover:text-cyan-400">
              Pricing
            </a>
            <a href="#use-cases" className="text-sm text-slate-400 transition hover:text-cyan-400">
              Use Cases
            </a>
            <a href="#faq" className="text-sm text-slate-400 transition hover:text-cyan-400">
              FAQ
            </a>
            <a
              href="#pricing"
              className="btn-glow rounded-md bg-cyan-500 px-5 py-2 text-sm font-semibold text-navy-900 transition hover:bg-cyan-400"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ──── HERO ──── */}
      <section className="scanlines radial-glow relative flex min-h-screen items-center pt-20">
        <div className="mx-auto max-w-7xl px-6 py-32 text-center">
          <div className="mb-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400">
            AUTONOMOUS FIELD INTELLIGENCE
          </div>
          <h1 className="font-display text-6xl leading-none tracking-wide text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            AI AGENTS FOR
            <br />
            <span className="text-gradient-cyan">FIELD OPERATIONS</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Deploy autonomous AI agents that handle inspections, compliance,
            logistics, and real-time field intelligence. Decisions at the edge.
            Zero latency. Total coverage.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="btn-glow rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-bold tracking-wide text-navy-900 transition hover:bg-cyan-400"
            >
              DEPLOY YOUR FIRST AGENT
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
            >
              SEE HOW IT WORKS
            </a>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-cyan-500/10 pt-10">
            {[
              ["99.97%", "UPTIME SLA"],
              ["<50ms", "EDGE LATENCY"],
              ["10M+", "TASKS COMPLETED"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-3xl text-cyan-400 sm:text-4xl">
                  {stat}
                </div>
                <div className="mt-1 text-xs tracking-widest text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──── HOW IT WORKS ──── */}
      <section id="how-it-works" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
              HOW IT <span className="text-cyan-400">WORKS</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              From configuration to global scale in four steps.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="glow-border glow-border-hover group rounded-xl bg-navy-800/50 p-8 transition"
              >
                <div className="font-display text-5xl text-cyan-500/30 transition group-hover:text-cyan-400/60">
                  {step.num}
                </div>
                <h3 className="mt-4 font-display text-xl tracking-wider text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──── PRICING ──── */}
      <section id="pricing" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
              MISSION-READY <span className="text-cyan-400">PRICING</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Scale from prototype to planet-wide deployment. No contracts.
              Cancel anytime.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl bg-navy-800/60 p-8 ${
                  plan.popular
                    ? "pricing-highlight ring-1 ring-cyan-500/50"
                    : "border border-slate-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold tracking-wider text-navy-900">
                    MOST POPULAR
                  </div>
                )}
                <div className="font-display text-2xl tracking-wider text-white">
                  {plan.name.toUpperCase()}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl text-white">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-slate-500">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleCheckout(plan.priceId)}
                  disabled={loadingPlan === plan.priceId}
                  className={`mt-8 w-full rounded-lg py-3 text-sm font-bold tracking-wide transition ${
                    plan.popular
                      ? "btn-glow bg-cyan-500 text-navy-900 hover:bg-cyan-400"
                      : "border border-slate-700 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400"
                  } disabled:opacity-50`}
                >
                  {loadingPlan === plan.priceId ? "LOADING..." : "GET STARTED"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──── USE CASES ──── */}
      <section id="use-cases" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
              FIELD <span className="text-cyan-400">USE CASES</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Purpose-built agents for every operational domain.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="glow-border glow-border-hover group rounded-xl bg-navy-800/40 p-8 transition"
              >
                <div className="text-3xl">{uc.icon}</div>
                <h3 className="mt-4 font-display text-xl tracking-wider text-white">
                  {uc.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──── FAQ ──── */}
      <section id="faq" className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
              <span className="text-cyan-400">FAQ</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Everything you need to know before going operational.
            </p>
          </div>
          <div className="mt-16 space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-navy-800/30 transition hover:border-cyan-500/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-sm font-medium text-white">
                    {faq.q}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-cyan-400 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer ${openFaq === i ? "open" : ""}`}
                  style={{
                    paddingLeft: openFaq === i ? "1.5rem" : "1.5rem",
                    paddingRight: openFaq === i ? "1.5rem" : "1.5rem",
                    paddingBottom: openFaq === i ? "1.25rem" : "0",
                  }}
                >
                  <p className="text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──── CTA BANNER ──── */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
            READY TO <span className="text-cyan-400">DEPLOY?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Join hundreds of operations teams using FieldMatrix agents to
            automate the field. Start in minutes.
          </p>
          <a
            href="#pricing"
            className="btn-glow mt-10 inline-block rounded-lg bg-cyan-500 px-10 py-4 text-sm font-bold tracking-wide text-navy-900 transition hover:bg-cyan-400"
          >
            LAUNCH YOUR AGENTS NOW
          </a>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer className="border-t border-slate-800/50 bg-navy-900/80 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="font-display text-xl tracking-wider text-white">
                FIELD<span className="text-cyan-400">MATRIX</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Autonomous AI agents for field operations. Built for the real
                world.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-slate-400">
                PRODUCT
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
                <li>
                  <a href="#how-it-works" className="transition hover:text-cyan-400">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="transition hover:text-cyan-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#use-cases" className="transition hover:text-cyan-400">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition hover:text-cyan-400">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-slate-400">
                COMPANY
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-slate-400">
                LEGAL
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-cyan-400">
                    SOC 2 Report
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800/50 pt-8 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} FieldMatrix AI. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
