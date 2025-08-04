import { Pentagon as DevIcon, type LucideProps } from "lucide-react"
export const Pentagon: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pentagon`} />
    </svg>
  )
