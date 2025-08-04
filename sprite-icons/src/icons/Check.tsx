import { Check as DevIcon, type LucideProps } from "lucide-react"
export const Check: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#check`} />
    </svg>
  )
