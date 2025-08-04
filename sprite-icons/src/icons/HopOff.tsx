import { HopOff as DevIcon, type LucideProps } from "lucide-react"
export const HopOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hop-off`} />
    </svg>
  )
