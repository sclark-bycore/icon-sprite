import { FolderTree as DevIcon, type LucideProps } from "lucide-react"
export const FolderTree: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-tree`} />
    </svg>
  )
