import { FolderCog as DevIcon, type LucideProps } from "lucide-react"
export const FolderCog: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-cog`} />
    </svg>
  )
