interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w-[1450px]
        min-w-[478px]
        mx-auto
        2xl:px-8
        lg:px-6
        px-8
      "
    >
      {children}
    </div>
  )
}

export default Container
