interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
      <h3 className="text-sm font-medium text-muted-foreground md:text-lg">
        {subtitle}
      </h3>
    </>
  )
}
