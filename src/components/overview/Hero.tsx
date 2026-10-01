import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const OverviewHero = () => {
  return (
    <Section className="flex min-h-[80vh] items-center pt-32">
      <Container>
        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-(--dark-muted)">
            [EYEBROW]
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            [HEADLINE PRINCIPAL]
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-(--dark-muted) sm:text-xl">
            [DESCRIÇÃO]
          </p>

          <div className="mt-10">
            <Button href="/">
              [CTA]
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OverviewHero;