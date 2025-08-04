import { Tablets as DevIcon, type LucideProps } from "lucide-react"
export const Tablets: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tablets`} />
    </svg>
  )
