"use client";

import { useState } from "react";

/* ───────────────────────── DATA ───────────────────────── */

const PLANS = [
  {
    name: "Starter",
    price: 149,
    priceId: "price_1T6a9i2mxB8h9GvSmZXO6NZT",
    features: [
      "1 AI agent",
      "3 skills configured",
      "Telegram integration",
      "Managed hosting & updates",
    ],
  },
  {
    name: "Pro",
    price: 199,
    priceId: "price_1T6a9i2mxB8h9GvSfsjaQfHa",
    popular: true,
    features: [
      "1 AI agent",
      "5 skills configured",
      "Telegram + Discord",
      "Priority support",
      "Managed hosting & updates",
    ],
  },
];

const STEPS = [
  {
    num: "01",
    title: "WE BUILD IT",
    desc: "Tell us about your business. We configure a custom AI agent with the skills and personality your operation needs.",
    icon: (
      <svg className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "YOU TALK TO IT",
    desc: "Your agent lives in Telegram, Discord, or both. Just message it like you would a real employee.",
    icon: (
      <svg className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "IT WORKS FOR YOU",
    desc: "Your agent answers questions, books jobs, follows up with leads, and handles the busywork — 24/7.",
    icon: (
      <svg className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const USE_CASES = [
  {
    title: "Pest Control",
    desc: "Answer service inquiries, book inspections, and follow up on treatment schedules automatically.",
    icon: (
      <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135 3.001 3.001 0 00-2.645-2.977A11.758 11.758 0 0012 4.5c-1.534 0-3.022.186-4.41.528a3.001 3.001 0 00-2.645 2.977 23.91 23.91 0 01-1.152 6.135A23.403 23.403 0 0112 12.75zM2.695 18.095a23.635 23.635 0 01-.39-4.845m.39 4.845a24.015 24.015 0 004.555 3.592M2.695 18.095L6.945 15m14.36 3.095a23.635 23.635 0 00.39-4.845m-.39 4.845a24.015 24.015 0 01-4.555 3.592M21.305 18.095L17.055 15" />
      </svg>
    ),
  },
  {
    title: "HVAC",
    desc: "Handle maintenance requests, schedule seasonal tune-ups, and quote replacements on autopilot.",
    icon: (
      <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Plumbing",
    desc: "Triage emergency calls, dispatch techs, and send automated follow-ups after every job.",
    icon: (
      <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    desc: "Qualify leads, answer property questions, and schedule showings without lifting a finger.",
    icon: (
      <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "What is an AI agent?",
    a: "It's like hiring a virtual employee that lives inside Telegram or Discord. You message it, and it responds — answering customer questions, booking appointments, following up on leads, and handling repetitive tasks. It's always on, never calls in sick, and gets smarter over time.",
  },
  {
    q: "How does the setup work?",
    a: "You tell us about your business and what you need help with. We build and configure your agent with the right skills, personality, and knowledge base. Then we deploy it to your Telegram and/or Discord. The whole process takes 24–48 hours — you don't need to touch any code.",
  },
  {
    q: "What channels does my agent work on?",
    a: "Starter plans include Telegram. Pro plans include both Telegram and Discord. Your agent responds in real time on whichever channels are included in your plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are month-to-month with no contracts and no cancellation fees. You can cancel, upgrade, or downgrade at any time from your account dashboard.",
  },
  {
    q: "How do I communicate with my agent?",
    a: "Just send it a message on Telegram or Discord — exactly like texting a real person. You can ask it questions, give it instructions, or have it handle tasks. You can also reach our team anytime for adjustments to its skills or behavior.",
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
            <span className="ml-1 text-xs font-body font-medium tracking-normal text-slate-500">agents</span>
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
            MANAGED AI AGENTS FOR LOCAL BUSINESSES
          </div>
          <h1 className="font-display text-6xl leading-none tracking-wide text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            YOUR AI EMPLOYEE
            <br />
            <span className="text-gradient-cyan">IS READY.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            We set it up. You just use it. A custom AI agent for your business
            that lives in Telegram &amp; Discord — answering questions, booking
            jobs, and following up with leads. 24/7.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="btn-glow rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-bold tracking-wide text-navy-900 transition hover:bg-cyan-400"
            >
              GET STARTED
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
            >
              SEE HOW IT WORKS
            </a>
          </div>

          <p className="mx-auto mt-16 max-w-md text-sm text-slate-600">
            We Set It Up. You Just Use It.
          </p>
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
              Three steps. Zero technical skill required.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="glow-border glow-border-hover group rounded-xl bg-navy-800/50 p-8 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5">
                    {step.icon}
                  </div>
                  <div className="font-display text-4xl text-cyan-500/30 transition group-hover:text-cyan-400/60">
                    {step.num}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-wider text-white">
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
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
              SIMPLE <span className="text-cyan-400">PRICING</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              No contracts. No setup fees. Cancel anytime.
            </p>
          </div>

          {/* Plan Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
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

          {/* Enterprise Contact Row */}
          <div className="mt-8 rounded-2xl border border-slate-800 bg-navy-800/40 p-8 text-center md:flex md:items-center md:justify-between md:text-left">
            <div>
              <h3 className="font-display text-2xl tracking-wider text-white">
                ENTERPRISE
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Need something bigger? Let us know.
              </p>
            </div>
            <a
              href="mailto:contact@fieldmatrix.ai"
              className="mt-6 inline-block rounded-lg border border-cyan-500/30 px-8 py-3 text-sm font-bold tracking-wide text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/10 md:mt-0"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──── USE CASES ──── */}
      <section id="use-cases" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
              BUILT FOR <span className="text-cyan-400">YOUR INDUSTRY</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              AI agents purpose-built for local service businesses.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="glow-border glow-border-hover group rounded-xl bg-navy-800/40 p-8 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5">
                  {uc.icon}
                </div>
                <h3 className="mt-5 font-display text-xl tracking-wider text-white">
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
              Common questions about your AI employee.
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
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
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

      {/* ──── FOOTER ──── */}
      <footer className="border-t border-slate-800/50 bg-navy-900/80 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="font-display text-xl tracking-wider text-white">
            FIELD<span className="text-cyan-400">MATRIX</span>
            <span className="ml-1 text-xs font-body font-medium tracking-normal text-slate-500">agents</span>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            agents.fieldmatrix.ai &mdash; A{" "}
            <a
              href="https://fieldmatrix.ai"
              className="text-slate-400 transition hover:text-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              FieldMatrix.ai
            </a>{" "}
            product
          </p>
          <a
            href="mailto:contact@fieldmatrix.ai"
            className="mt-2 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
          >
            contact@fieldmatrix.ai
          </a>
          <div className="mt-8 border-t border-slate-800/50 pt-6 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} FieldMatrix AI. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
