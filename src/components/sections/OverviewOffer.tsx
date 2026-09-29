const OverviewOffer = () => {
  return (
    <section className="border-t border-zinc-800 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center md:p-12">
          <span className="text-sm text-zinc-500">
            [OFERTA]
          </span>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            [TÍTULO DA OFERTA]
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            [DESCRIÇÃO DA OFERTA]
          </p>

          <div className="mt-8">
            <span className="text-4xl font-bold">
              [PREÇO]
            </span>
          </div>

          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-zinc-200">
            [CTA]
          </button>
        </div>
      </div>
    </section>
  );
};

export default OverviewOffer;