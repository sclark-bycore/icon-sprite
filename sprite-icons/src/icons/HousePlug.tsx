import { HousePlug as DevIcon, type LucideProps } from "lucide-react"
export const HousePlug: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#house-plug`} />
    </svg>
  )
