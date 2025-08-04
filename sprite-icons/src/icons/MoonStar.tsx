import { MoonStar as DevIcon, type LucideProps } from "lucide-react"
export const MoonStar: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#moon-star`} />
    </svg>
  )
