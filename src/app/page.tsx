import { Header } from '@/components/header'

import { Hero } from './_components/hero'
import { ProjectsList } from './_components/projects-list'
import { TechStack } from './_components/tech-stack'

export default function Home() {
  return (
    <main className="my-16 space-y-24 md:space-y-28">
      <Hero />

      <TechStack />
      <div className="space-y-3 text-center">
        <Header title="Projects" subtitle="Things I've built so far" />

        <ProjectsList />
      </div>
    </main>
  )
}
