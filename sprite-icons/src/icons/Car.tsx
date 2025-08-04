import { Car as DevIcon, type LucideProps } from "lucide-react"
export const Car: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#car`} />
    </svg>
  )
