import { Guitar as DevIcon, type LucideProps } from "lucide-react"
export const Guitar: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#guitar`} />
    </svg>
  )
