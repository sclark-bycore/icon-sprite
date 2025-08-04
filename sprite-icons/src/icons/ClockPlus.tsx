import { ClockPlus as DevIcon, type LucideProps } from "lucide-react"
export const ClockPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-plus`} />
    </svg>
  )
