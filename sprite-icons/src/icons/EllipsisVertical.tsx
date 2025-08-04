import { EllipsisVertical as DevIcon, type LucideProps } from "lucide-react"
export const EllipsisVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ellipsis-vertical`} />
    </svg>
  )
