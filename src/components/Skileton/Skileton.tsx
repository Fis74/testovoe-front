import { twMerge } from 'tailwind-merge'

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        'animate-pulse bg-neutral-200 w-full h-full',
        className
      )}
      {...props}
    />
  )
}

export default Skeleton
