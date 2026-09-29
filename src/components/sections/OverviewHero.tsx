const OverviewHero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <span className="text-sm text-zinc-400">
          [EYEBROW]
        </span>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
          [HEADLINE PRINCIPAL]
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          [DESCRIÇÃO]
        </p>

        <button className="mt-8 rounded-lg bg-white px-6 py-3 font-medium text-black">
          [CTA]
        </button>
      </div>
    </section>
  );
};

export default OverviewHero;