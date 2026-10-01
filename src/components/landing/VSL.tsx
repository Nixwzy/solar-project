import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const LandingVSL = () => {
  return (
    <Section className="border-b border-(--border)">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-(--muted)">
              [VSL]
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              [TÍTULO]
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-(--muted) sm:text-lg">
              [DESCRIÇÃO]
            </p>
          </div>

          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-3xl bg-black">
            <span className="text-sm text-zinc-500">
              [PLAYER]
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LandingVSL;