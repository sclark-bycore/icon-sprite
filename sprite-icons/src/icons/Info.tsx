import { Info as DevIcon, type LucideProps } from "lucide-react"
export const Info: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#info`} />
    </svg>
  )
