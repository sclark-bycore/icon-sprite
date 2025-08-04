import { FolderLock as DevIcon, type LucideProps } from "lucide-react"
export const FolderLock: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-lock`} />
    </svg>
  )
