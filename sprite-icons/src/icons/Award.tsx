import { Award as DevIcon, type LucideProps } from "lucide-react"
export const Award: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#award`} />
    </svg>
  )
