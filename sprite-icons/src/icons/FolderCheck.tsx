import { FolderCheck as DevIcon, type LucideProps } from "lucide-react"
export const FolderCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-check`} />
    </svg>
  )
