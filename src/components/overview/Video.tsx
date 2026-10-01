const OverviewVideo = () => {
  return (
    <section className="border-t border-zinc-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <span className="text-sm text-zinc-500">
            [SEÇÃO]
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            [TÍTULO]
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            [DESCRIÇÃO]
          </p>
        </div>

        <div className="flex aspect-video items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
          <span className="text-zinc-500">
            [VÍDEO / DEMONSTRAÇÃO]
          </span>
        </div>
      </div>
    </section>
  );
};

export default OverviewVideo;