import { CornerUpRight as DevIcon, type LucideProps } from "lucide-react"
export const CornerUpRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#corner-up-right`} />
    </svg>
  )
