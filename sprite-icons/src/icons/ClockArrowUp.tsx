import { ClockArrowUp as DevIcon, type LucideProps } from "lucide-react"
export const ClockArrowUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-arrow-up`} />
    </svg>
  )
