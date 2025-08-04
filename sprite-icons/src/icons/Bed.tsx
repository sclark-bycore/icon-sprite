import { Bed as DevIcon, type LucideProps } from "lucide-react"
export const Bed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bed`} />
    </svg>
  )
