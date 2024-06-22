import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'

import { cn } from '@/lib/utils'

interface ProjectsListProps {
  className?: string
}

export function ProjectsList({ className }: ProjectsListProps) {
  return (
    <div
      className={cn(
        'grid justify-center gap-6 pt-2 text-left text-xs text-muted-foreground sm:grid-cols-[repeat(auto-fill,18rem)] md:gap-8 md:pt-8',
        className,
      )}
    >
      {projects.map((project) => (
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
    </div>
  )
}

const projects = [
  {
    title: 'Ignews',
    description:
      'A blog platform with subscription payment integration and Prismic CMS integration with Next.js',
    image: 'https://th.bing.com/th/id/OIG1.IzQyJBTnzNhgY51zESZd?pid=ImgGn',
    link: 'https://ignews-two-nu.vercel.app/',
    preview: 'https://ignews-two-nu.vercel.app/',
    techStack: ['Next.js', 'FaunaDB', 'Stripe', 'Prismic CMS'],
  },
  {
    title: 'Ignews2',
    description: 'A blog platform with subscription payment integration',
    image: 'https://th.bing.com/th/id/OIG1.IzQyJBTnzNhgY51zESZd?pid=ImgGn',
    link: 'https://ignews-two-nu.vercel.app/',
    preview: 'https://ignews-two-nu.vercel.app/',
    techStack: ['Next.js', 'FaunaDB', 'Stripe', 'Prismic CMS'],
  },
  {
    title: 'Ignews3',
    description: 'A blog platform with subscription payment integration',
    image: 'https://th.bing.com/th/id/OIG1.IzQyJBTnzNhgY51zESZd?pid=ImgGn',
    link: 'https://ignews-two-nu.vercel.app/',
    preview: 'https://ignews-two-nu.vercel.app/',
    techStack: ['Next.js', 'FaunaDB', 'Stripe', 'Prismic CMS'],
  },
  {
    title: 'Ignews4',
    description: 'A blog platform with subscription payment integration',
    image: 'https://th.bing.com/th/id/OIG1.IzQyJBTnzNhgY51zESZd?pid=ImgGn',
    link: 'https://ignews-two-nu.vercel.app/',
    preview: 'https://ignews-two-nu.vercel.app/',
    techStack: ['Next.js', 'FaunaDB', 'Stripe', 'Prismic CMS'],
  },
  {
    title: 'Ignews5',
    description: 'A blog platform with subscription payment integration',
    image: 'https://ignews-two-nu.vercel.app/images/avatar.svg',
    link: 'https://ignews-two-nu.vercel.app/',
    preview: 'https://ignews-two-nu.vercel.app/',
    techStack: ['Next.js', 'FaunaDB', 'Stripe', 'Prismic CMS'],
  },
  {
    title: 'Ignews6',
    description: 'A blog platform with subscription payment integration',
    image: 'https://ignews-two-nu.vercel.app/images/avatar.svg',
    link: 'https://ignews-two-nu.vercel.app/',
    preview: 'https://ignews-two-nu.vercel.app/',
    techStack: ['Next.js', 'FaunaDB', 'Stripe', 'Prismic CMS'],
  },
]
