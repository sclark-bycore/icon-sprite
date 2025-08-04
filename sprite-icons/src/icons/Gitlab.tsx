import { Gitlab as DevIcon, type LucideProps } from "lucide-react"
export const Gitlab: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#gitlab`} />
    </svg>
  )
