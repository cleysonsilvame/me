import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { BurgerMenu } from '@/components/burger-menu'
import { LocaleToggle } from '@/components/locale-toggle'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { NavLink } from '@/components/nav-link'
import { Link } from '@/i18n/navigation'

export function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex items-center gap-2 border-b bg-background/80 p-4 backdrop-blur-sm md:gap-16">
      <Link href="/" className="mr-auto flex gap-4">
        <Logo />
      </Link>

      <ul className="hidden gap-16 font-medium text-muted-foreground md:flex">
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

      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="https://github.com/cleysonsilvame"
          target="_blank"
          title="Github"
        >
          <FaGithub className="text-2xl text-muted-foreground">
            <span className="sr-only">Github</span>
          </FaGithub>
        </a>
        <a
          href="http://linkedin.com/in/cleyson-silva-639b01188"
          target="_blank"
          title="Linkedin"
        >
          <FaLinkedin className="text-2xl text-muted-foreground">
            <span className="sr-only">Linkedin</span>
          </FaLinkedin>
        </a>

        <LocaleToggle />
        <ModeToggle />

        <BurgerMenu className="md:hidden" />
      </div>
    </nav>
  )
}
