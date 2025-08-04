import { Library as DevIcon, type LucideProps } from "lucide-react"
export const Library: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#library`} />
    </svg>
  )
