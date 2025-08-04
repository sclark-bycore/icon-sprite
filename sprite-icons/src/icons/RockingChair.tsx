import { RockingChair as DevIcon, type LucideProps } from "lucide-react"
export const RockingChair: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rocking-chair`} />
    </svg>
  )
