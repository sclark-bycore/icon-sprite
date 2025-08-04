import { Blinds as DevIcon, type LucideProps } from "lucide-react"
export const Blinds: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#blinds`} />
    </svg>
  )
