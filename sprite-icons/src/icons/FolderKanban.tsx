import { FolderKanban as DevIcon, type LucideProps } from "lucide-react"
export const FolderKanban: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-kanban`} />
    </svg>
  )
