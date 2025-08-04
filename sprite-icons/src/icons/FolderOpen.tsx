import { FolderOpen as DevIcon, type LucideProps } from "lucide-react"
export const FolderOpen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-open`} />
    </svg>
  )
