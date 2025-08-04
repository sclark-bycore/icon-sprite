import { HousePlus as DevIcon, type LucideProps } from "lucide-react"
export const HousePlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#house-plus`} />
    </svg>
  )
