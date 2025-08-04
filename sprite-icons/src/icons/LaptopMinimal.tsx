import { LaptopMinimal as DevIcon, type LucideProps } from "lucide-react"
export const LaptopMinimal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#laptop-minimal`} />
    </svg>
  )
