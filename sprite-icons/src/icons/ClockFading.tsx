import { ClockFading as DevIcon, type LucideProps } from "lucide-react"
export const ClockFading: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clock-fading`} />
    </svg>
  )
