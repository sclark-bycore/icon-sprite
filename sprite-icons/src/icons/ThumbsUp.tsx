import { ThumbsUp as DevIcon, type LucideProps } from "lucide-react"
export const ThumbsUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#thumbs-up`} />
    </svg>
  )
