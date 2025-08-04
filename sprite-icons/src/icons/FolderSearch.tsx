import { FolderSearch as DevIcon, type LucideProps } from "lucide-react"
export const FolderSearch: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-search`} />
    </svg>
  )
