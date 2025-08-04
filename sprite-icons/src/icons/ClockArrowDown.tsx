import { ClockArrowDown as DevIcon, type LucideProps } from "lucide-react"
export const ClockArrowDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-arrow-down`} />
    </svg>
  )
