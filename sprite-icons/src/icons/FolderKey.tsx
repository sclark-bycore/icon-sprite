import { FolderKey as DevIcon, type LucideProps } from "lucide-react"
export const FolderKey: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-key`} />
    </svg>
  )
