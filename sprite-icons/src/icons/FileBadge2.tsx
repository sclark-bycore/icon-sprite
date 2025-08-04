import { FileBadge2 as DevIcon, type LucideProps } from "lucide-react"
export const FileBadge2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-badge-2`} />
    </svg>
  )
