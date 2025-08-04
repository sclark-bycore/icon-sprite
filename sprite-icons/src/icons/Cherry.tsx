import { Cherry as DevIcon, type LucideProps } from "lucide-react"
export const Cherry: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cherry`} />
    </svg>
  )
