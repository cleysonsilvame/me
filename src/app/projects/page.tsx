import { Header } from '@/components/header'

import { ProjectsList } from '../_components/projects-list'

export default function Projects() {
  return (
    <div className="my-10">
      <div className="space-y-3">
        <Header title="Projects" subtitle="Things I've built so far" />
      </div>

      <ProjectsList className="mt-8 justify-start" />
    </div>
  )
}
