import Link from "next/link";

export const metadata = {
  title: "Payment Successful — FieldMatrix AI",
};

export default function SuccessPage() {
  return (
    <div className="grid-bg flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <svg
            className="h-10 w-10 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mt-8 font-display text-5xl tracking-wide text-white">
          MISSION <span className="text-cyan-400">ACTIVATED</span>
        </h1>
        <p className="mt-4 text-slate-400">
          Your subscription is confirmed. Check your email for onboarding
          instructions and agent deployment guides.
        </p>
        <Link
          href="/"
          className="btn-glow mt-8 inline-block rounded-lg bg-cyan-500 px-8 py-3 text-sm font-bold tracking-wide text-navy-900 transition hover:bg-cyan-400"
        >
          RETURN TO BASE
        </Link>
      </div>
    </div>
  );
}
