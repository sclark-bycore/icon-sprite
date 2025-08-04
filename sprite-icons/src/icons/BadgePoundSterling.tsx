import { BadgePoundSterling as DevIcon, type LucideProps } from "lucide-react"
export const BadgePoundSterling: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-pound-sterling`} />
    </svg>
  )
