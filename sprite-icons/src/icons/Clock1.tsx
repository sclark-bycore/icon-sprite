import { Clock1 as DevIcon, type LucideProps } from "lucide-react"
export const Clock1: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-1`} />
    </svg>
  )
