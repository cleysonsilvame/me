import { Footer } from './_components/footer'
import { NavBar } from './_components/nav-bar'

interface TemplateProps {
  children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col px-10">
      <NavBar />
      <div className="flex flex-1 pt-20">{children}</div>

      <Footer />
    </div>
  )
}
