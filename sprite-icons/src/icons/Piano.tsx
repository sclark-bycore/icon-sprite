import { Piano as DevIcon, type LucideProps } from "lucide-react"
export const Piano: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#piano`} />
    </svg>
  )
