import { User as DevIcon, type LucideProps } from "lucide-react"
export const User: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user`} />
    </svg>
  )
