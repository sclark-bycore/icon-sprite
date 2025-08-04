import { Fan as DevIcon, type LucideProps } from "lucide-react"
export const Fan: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fan`} />
    </svg>
  )
