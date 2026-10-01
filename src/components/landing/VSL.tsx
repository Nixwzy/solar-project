const LandingVSL = () => {
  return (
    <section className="border-t border-zinc-200 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm text-zinc-500">
            [VSL]
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            [TÍTULO]
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-500">
            [DESCRIÇÃO]
          </p>
        </div>

        <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-zinc-900">
          <span className="text-zinc-500">
            [PLAYER]
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingVSL;