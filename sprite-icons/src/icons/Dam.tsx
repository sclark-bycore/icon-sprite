import { Dam as DevIcon, type LucideProps } from "lucide-react"
export const Dam: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#dam`} />
    </svg>
  )
