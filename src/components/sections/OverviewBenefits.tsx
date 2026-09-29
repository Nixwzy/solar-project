const OverviewBenefits = () => {
  const benefits = [
    '[BENEFÍCIO 01]',
    '[BENEFÍCIO 02]',
    '[BENEFÍCIO 03]',
    '[BENEFÍCIO 04]',
  ];

  return (
    <section className="border-t border-zinc-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="text-sm text-zinc-500">
            [SEÇÃO]
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            [BENEFÍCIOS]
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            [DESCRIÇÃO]
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                <span className="text-zinc-500"></span>
              </div>

              <h3 className="text-lg font-semibold">
                {benefit}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                [DESCRIÇÃO DO BENEFÍCIO]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewBenefits;