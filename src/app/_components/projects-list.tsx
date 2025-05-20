import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'

import { projects } from '@/constants/projects'
import { cn } from '@/lib/utils'

interface ProjectsListProps {
  className?: string
  variant?: 'full' | 'compact'
}

export function ProjectsList({
  className,
  variant = 'full',
}: ProjectsListProps) {
  const filteredProjects = projects.slice(
    0,
    variant === 'compact' ? 2 : projects.length,
  )

  return (
    <div
      className={cn(
        'grid justify-center gap-6 pt-2 text-left text-xs text-muted-foreground sm:grid-cols-[repeat(auto-fill,18rem)] md:gap-8 md:pt-8',
        variant === 'compact' && 'md:grid-cols-3 md:gap-10',
        className,
      )}
    >
      {filteredProjects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col items-center overflow-hidden rounded-lg bg-primary-foreground shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={512}
            height={512}
            className="h-64 w-full object-cover"
          />

          <div className="flex h-full flex-col gap-4 p-6">
            <h3 className="text-xl font-semibold leading-relaxed text-card-foreground">
              {project.title}
            </h3>
            <p className="flex-1 text-sm">{project.description}</p>
            <p className="text-sm italic">
              <strong className="font-medium not-italic">Tech stack:</strong>{' '}
              {project.techStack.join(', ')}
            </p>
            <div className="space-x-8">
              <a
                href={project.preview}
                target="_blank"
                className="align-middle text-sm leading-relaxed text-card-foreground underline"
              >
                <FiLink className="mr-1 inline-block" />
                Live Preview
              </a>
              <a
                href={project.link}
                target="_blank"
                className="align-middle text-sm leading-relaxed text-card-foreground underline"
              >
                <FaGithub className="mr-1 inline-block" />
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}

      {variant === 'compact' && (
        <Link
          className="mx-auto flex h-10 w-1/2 items-center justify-center self-center overflow-hidden rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-origin-border text-primary shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
          href={'/projects'}
        >
          <div className="flex size-full flex-1 items-center justify-center gap-2 bg-background px-3 py-2">
            <p className="font-bold">More</p>
            <ArrowRight className="size-4" />
          </div>
        </Link>
      )}
    </div>
  )
}
