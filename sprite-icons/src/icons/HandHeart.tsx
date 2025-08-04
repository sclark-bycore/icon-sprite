import { HandHeart as DevIcon, type LucideProps } from "lucide-react"
export const HandHeart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hand-heart`} />
    </svg>
  )
