import { FolderDown as DevIcon, type LucideProps } from "lucide-react"
export const FolderDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-down`} />
    </svg>
  )
