import { useTranslations } from 'next-intl'

export function useProjects() {
  const t = useTranslations('projects')

  return [
    {
      title: 'Github Blog',
      description: t('githubBlog'),
      image:
        'https://raw.githubusercontent.com/cleysonsilvame/desafio-03-github-blog-react-2023/refs/heads/main/.github/iframe-notebook.png',
      link: 'https://github.com/cleysonsilvame/desafio-03-github-blog-react-2023',
      preview: 'https://blog.cleysonsilva.dev/',
      techStack: ['ReactJS', 'Vite', 'Github API'],
    },
    {
      title: 'Ignite Shop',
      description: t('igniteShop'),
      image:
        'https://raw.githubusercontent.com/cleysonsilvame/desafio-04-ignite-react-ignite-shop/refs/heads/main/.github/iframe.png',
      link: 'https://github.com/cleysonsilvame/desafio-04-ignite-react-ignite-shop',
      preview: 'https://ignite-shop.cleysonsilva.dev/',
      techStack: ['React', 'Next.js', 'TypeScript', 'Stitches', 'Stripe API'],
    },
    {
      title: 'Coffee Delivery',
      description: t('coffeeDelivery'),
      image:
        'https://raw.githubusercontent.com/cleysonsilvame/desafio-02-react-2023-coffee-delivery/refs/heads/main/.github/iframe.png',
      link: 'https://github.com/cleysonsilvame/desafio-02-react-2023-coffee-delivery',
      preview: 'https://coffee-delivery.cleysonsilva.dev/',
      techStack: ['React', 'TypeScript', 'Vite', 'Styled Components'],
    },
    {
      title: 'Moveit',
      description: t('moveit'),
      image:
        'https://raw.githubusercontent.com/cleysonsilvame/moveit/refs/heads/main/.github/iframe.png',
      link: 'https://github.com/cleysonsilvame/moveit',
      preview: 'https://moveit.cleysonsilva.dev/',
      techStack: ['ReactJS', 'Typescript'],
    },
    {
      title: 'Ignews',
      description: t('ignews'),
      image:
        'https://raw.githubusercontent.com/cleysonsilvame/codebase-react-ignite/refs/heads/main/chapter-3/.github/iframe.png',
      link: 'https://github.com/cleysonsilvame/codebase-react-ignite/tree/main/chapter-3',
      preview: 'https://ignews.cleysonsilva.dev/',
      techStack: ['Next.js', 'FaunaDB', 'Stripe', 'Prismic CMS'],
    },
  ]
}
