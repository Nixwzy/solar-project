import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-(--muted)">
            [EYEBROW]
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
            [HEADLINE]
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
            [DESCRIÇÃO]
          </p>

          <div className="mt-10">
            <Button href="/overview">
              [CTA]
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}