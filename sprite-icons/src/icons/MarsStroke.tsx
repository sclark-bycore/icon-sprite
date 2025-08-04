import { MarsStroke as DevIcon, type LucideProps } from "lucide-react"
export const MarsStroke: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mars-stroke`} />
    </svg>
  )
