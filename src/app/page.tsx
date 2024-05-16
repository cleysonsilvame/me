import Image from 'next/image'

import { CursorText } from '@/components/cursor-text'

const techStack = [
  {
    alt: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    alt: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    alt: 'Vite.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  },
  {
    alt: 'Tailwind CSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    alt: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    dark: true,
  },
  {
    alt: 'Terraform',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg',
    dark: true,
  },
  {
    alt: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    alt: 'Vercel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    dark: true,
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
    alt: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
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
    alt: 'Google Cloud',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
  },
  {
    alt: 'Azure',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
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
    alt: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
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

export default function Home() {
  return (
    <div className="my-16 space-y-32">
      <div className="flex items-center justify-around">
        <h1 className="flex flex-col text-6xl font-bold leading-tight">
          <span>Hi 👋,</span>
          <span>My name is</span>
          <CursorText>Cleyson Silva.</CursorText>
          <span>I build things for web.</span>
        </h1>
        <div className="relative max-h-72 min-h-72 min-w-72 max-w-72 overflow-hidden rounded-full border-8 border-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-origin-border ">
          <Image
            alt="Cleyson Silva"
            src="/me.jpg"
            width={400}
            height={400}
            className="absolute grayscale transition-all hover:grayscale-0"
          />
        </div>
      </div>

      <div className="space-y-3 text-center">
        <h2 className="text-4xl font-bold">My Tech Stack</h2>
        <h3 className="text-lg font-medium text-muted-foreground">
          Technologies I’ve been working with recently
        </h3>

        <ul className="grid grid-cols-[repeat(auto-fill,6rem)] justify-center gap-8 pt-8 text-sm text-muted-foreground">
          {techStack.map((tech) => (
            <li
              key={tech.alt}
              className="flex flex-col items-center justify-center"
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
      </div>
    </div>
  )
}
