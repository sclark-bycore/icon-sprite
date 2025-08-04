import { LifeBuoy as DevIcon, type LucideProps } from "lucide-react"
export const LifeBuoy: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#life-buoy`} />
    </svg>
  )
