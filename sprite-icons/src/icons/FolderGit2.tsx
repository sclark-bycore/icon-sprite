import { FolderGit2 as DevIcon, type LucideProps } from "lucide-react"
export const FolderGit2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-git-2`} />
    </svg>
  )
