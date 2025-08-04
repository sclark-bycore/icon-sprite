import { PhoneMissed as DevIcon, type LucideProps } from "lucide-react"
export const PhoneMissed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#phone-missed`} />
    </svg>
  )
