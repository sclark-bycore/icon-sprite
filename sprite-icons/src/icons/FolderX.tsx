import { FolderX as DevIcon, type LucideProps } from "lucide-react"
export const FolderX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-x`} />
    </svg>
  )
