import { CornerUpLeft as DevIcon, type LucideProps } from "lucide-react"
export const CornerUpLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#corner-up-left`} />
    </svg>
  )
