import { Combine as DevIcon, type LucideProps } from "lucide-react"
export const Combine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#combine`} />
    </svg>
  )
