import { FolderClosed as DevIcon, type LucideProps } from "lucide-react"
export const FolderClosed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-closed`} />
    </svg>
  )
