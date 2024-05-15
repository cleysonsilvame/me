interface LogoProps {
  variant?: 'primary' | 'secondary'
}

export function Logo({ variant = 'primary' }: LogoProps) {
  const variants = {
    primary: (
      <div className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text p-1 font-poppins font-bold text-transparent">
        <div className="grid grid-cols-[min-content_min-content_min-content] grid-rows-2 items-center">
          <span className="row-span-2 inline-block text-4xl">&#123;</span>
          <span className="-mb-2 text-3xl leading-none tracking-tight">
            silva
          </span>
          <span className="row-span-2 inline-block text-4xl">&#125;</span>
          <div className="col-start-2 text-lg leading-none tracking-tight">
            cleyson
          </div>
        </div>
      </div>
    ),
    secondary: (
      <div className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text p-1 font-poppins font-bold text-transparent">
        <div className="text-2xl leading-none">
          &#123;
          <span className="text-2xl leading-none tracking-tight">silva</span>
          &#125;
        </div>
        <div className="ml-[5px] text-lg leading-tight tracking-tight">
          cleyson
        </div>
      </div>
    ),
  }

  return variants[variant]
}
