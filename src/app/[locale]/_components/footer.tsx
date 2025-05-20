import { Logo } from '@/components/logo'
import { NavLink } from '@/components/nav-link'
import { Link } from '@/i18n/navigation'

export function Footer() {
  return (
    <div className="flex items-center gap-4 border-t py-8">
      <Link href="/" className="flex scale-75 gap-4">
        <Logo />
      </Link>

      <ul className="hidden scale-90 gap-16 font-medium text-muted-foreground md:flex">
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

      <p className="ml-auto text-sm text-muted-foreground">
        © 2025 Cleyson Silva
      </p>
    </div>
  )
}
