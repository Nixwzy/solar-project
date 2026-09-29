export default function Hero() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">

        <span className="text-sm font-medium uppercase tracking-widest text-black/50">
          texto chamativo / eyebrow
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
          headline
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
          texto descritivo do servico <br/>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <div className="mt-10">
          <a
            href="/overview"
            className="inline-flex rounded-full bg-black px-7 py-3.5 font-medium text-white transition-transform hover:scale-105"
          >
            quero conhecer
          </a>
        </div>

      </div>
    </section>
  )
}