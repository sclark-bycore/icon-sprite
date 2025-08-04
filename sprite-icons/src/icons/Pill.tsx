import { Pill as DevIcon, type LucideProps } from "lucide-react"
export const Pill: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pill`} />
    </svg>
  )
