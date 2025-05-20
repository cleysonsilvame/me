import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Header } from '@/components/header'

export function TechStack() {
  const t = useTranslations('TechStackComponent')

  const priorityTechs = techStack.filter((tech) => tech.priority)
  const regularTechs = techStack.filter((tech) => !tech.priority)

  return (
    <div className="space-y-3 text-center">
      <Header title={t('header.title')} subtitle={t('header.subtitle')} />

      <div>
        <ul className="grid grid-cols-[repeat(auto-fill,3rem)] justify-center gap-6 rounded-xl border-2 border-primary p-6 pt-2 text-xs text-muted-foreground md:grid-cols-[repeat(auto-fill,6rem)] md:gap-8 md:pt-8 md:text-sm">
          {priorityTechs.map((tech) => (
            <li
              key={tech.alt}
              className="flex flex-col items-center justify-center rounded-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
            >
              <Image
                alt={tech.alt}
                src={tech.src}
                width={76}
                height={76}
                data-dark={tech.dark}
                className="mb-1 rounded-md p-2 data-[dark=true]:dark:bg-primary"
              />
              {tech.alt}
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-[repeat(auto-fill,2rem)] justify-center gap-6 pt-2 text-xs text-muted-foreground md:grid-cols-[repeat(auto-fill,3rem)] md:gap-8 md:pt-8 md:text-sm">
          {regularTechs.map((tech) => (
            <li
              key={tech.alt}
              className="flex flex-col items-center justify-center rounded-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
            >
              <Image
                alt={tech.alt}
                src={tech.src}
                width={46}
                height={46}
                data-dark={tech.dark}
                className="mb-1 rounded-md p-2 data-[dark=true]:dark:bg-primary"
              />
              {tech.alt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const techStack = [
  {
    alt: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    priority: true,
  },
  {
    alt: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    priority: true,
  },
  {
    alt: 'Vite.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    priority: true,
  },
  {
    alt: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    priority: true,
  },
  {
    alt: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    dark: true,
    priority: true,
  },

  {
    alt: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    priority: true,
  },
  {
    alt: 'Google Cloud',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    priority: true,
  },
  {
    alt: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    priority: true,
  },
  {
    alt: 'Terraform',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg',
    dark: true,
  },
  {
    alt: 'Vercel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    dark: true,
  },
  {
    alt: 'Tailwind CSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    alt: 'Swagger',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
  },
  {
    alt: 'Jest',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  },
  {
    alt: 'Kubernetes',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
  },
  {
    alt: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  },
  {
    alt: 'Express',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    dark: true,
  },
  {
    alt: 'Fastify',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg',
    dark: true,
  },
  {
    alt: 'Flask',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    dark: true,
  },
  {
    alt: 'Helm',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg',
  },
  {
    alt: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    alt: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    alt: 'NestJS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  },
  {
    alt: 'Nginx',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
  },
  {
    alt: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },

  {
    alt: 'Redis',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  },
  {
    alt: 'SQLite',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  },
  {
    alt: 'Webpack',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
  },
  {
    alt: 'Babel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg',
  },
  {
    alt: 'Prisma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    dark: true,
  },
  {
    alt: 'Prometheus',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg',
  },
  {
    alt: 'RabbitMQ',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
  },
  {
    alt: 'Redux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  },
  {
    alt: 'Sass',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  },
  {
    alt: 'Spring',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  },
  {
    alt: 'Storybook',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
  },
  {
    alt: 'Java',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    alt: 'Go',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  },
]
