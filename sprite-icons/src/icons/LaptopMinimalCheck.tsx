import { LaptopMinimalCheck as DevIcon, type LucideProps } from "lucide-react"
export const LaptopMinimalCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#laptop-minimal-check`} />
    </svg>
  )
