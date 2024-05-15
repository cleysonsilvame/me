import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { NavLink } from '@/components/nav-link'

interface TemplateProps {
  children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
  return (
    <div className="mx-4 min-h-screen">
      <nav className="flex items-center gap-16 p-6">
        <Link href="/" className="mr-auto flex gap-4">
          <Logo />
        </Link>

        <ul className="flex gap-16 font-medium text-muted-foreground">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="#">
            <FaGithub className="text-2xl text-muted-foreground" />
          </a>
          <a href="#">
            <FaLinkedin className="text-2xl text-muted-foreground" />
          </a>
          <ModeToggle />
        </div>
      </nav>
      <main className="flex  flex-col items-center justify-between p-24">
        {children}
      </main>
    </div>
  )
}
