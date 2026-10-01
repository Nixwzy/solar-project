const OverviewSocialProof = () => {
  const testimonials = [
    '[FEEDBACK 01]',
    '[FEEDBACK 02]',
    '[FEEDBACK 03]',
  ];

  return (
    <section className="border-t border-zinc-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="text-sm text-zinc-500">
            [SEÇÃO]
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            [PROVAS REAIS / FEEDBACKS]
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            [DESCRIÇÃO]
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="mb-6 h-10 w-10 rounded-full bg-zinc-800" />

              <p className="text-zinc-300">
                [DEPOIMENTO]
              </p>

              <div className="mt-6">
                <p className="font-medium">
                  {testimonial}
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  [NOME / CARGO]
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSocialProof;