const OverviewExamples = () => {
  const examples = ['[EXEMPLO 01]', '[EXEMPLO 02]', '[EXEMPLO 03]'];

  return (
    <section className="border-t border-zinc-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="text-sm text-zinc-500">
            [SEÇÃO]
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            [EXEMPLOS PRÁTICOS]
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            [DESCRIÇÃO]
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((example) => (
            <div
              key={example}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="mb-6 flex aspect-video items-center justify-center rounded-xl bg-zinc-800">
                <span className="text-sm text-zinc-500">
                  [PREVIEW]
                </span>
              </div>

              <h3 className="text-xl font-semibold">
                {example}
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                [DESCRIÇÃO DO EXEMPLO]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewExamples;