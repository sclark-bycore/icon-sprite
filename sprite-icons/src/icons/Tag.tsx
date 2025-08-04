import { Tag as DevIcon, type LucideProps } from "lucide-react"
export const Tag: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tag`} />
    </svg>
  )
