export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify SMS Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover More Carts with{" "}
          <span className="text-[#58a6ff]">AI-Optimized SMS Timing</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Shopify store, run A/B tests on SMS messages and send times, and let the system automatically learn the best moment to reach each customer segment.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Carts — $13/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">3.4×</div>
            <div className="text-sm text-[#8b949e] mt-1">avg. recovery lift</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">12 min</div>
            <div className="text-sm text-[#8b949e] mt-1">setup time</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">Auto</div>
            <div className="text-sm text-[#8b949e] mt-1">timing optimization</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">All-Inclusive Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$13</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Shopify webhook integration",
              "Twilio SMS A/B testing",
              "Segment-based timing optimizer",
              "Conversion tracking dashboard",
              "Unlimited abandoned cart events",
              "Auto-learning message scheduler"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the timing optimizer work?",
              a: "It tracks when each customer segment converts after receiving an SMS, then automatically shifts future sends to the highest-converting windows using a simple bandit algorithm."
            },
            {
              q: "Do I need a Twilio account?",
              a: "Yes. You bring your own Twilio credentials. This keeps your SMS costs transparent and your phone numbers under your control."
            },
            {
              q: "What Shopify plan do I need?",
              a: "Any Shopify plan that supports webhooks works — Basic and above. The app listens to cart abandonment events via the Shopify webhook API."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} SMS Cart Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
