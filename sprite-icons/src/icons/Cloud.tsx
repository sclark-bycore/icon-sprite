import { Cloud as DevIcon, type LucideProps } from "lucide-react"
export const Cloud: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud`} />
    </svg>
  )
