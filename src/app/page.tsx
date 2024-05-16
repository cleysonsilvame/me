import { Hero } from './_components/hero'
import { TechStack } from './_components/tech-stack'

export default function Home() {
  return (
    <main className="my-16 space-y-24 md:space-y-32">
      <Hero />

      <TechStack />
    </main>
  )
}
