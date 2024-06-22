import { NavBar } from './_components/nav-bar'

interface TemplateProps {
  children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
  return (
    <div className="container mx-auto min-h-screen px-10">
      <NavBar />
      {children}
    </div>
  )
}
