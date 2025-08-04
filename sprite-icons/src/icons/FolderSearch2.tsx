import { FolderSearch2 as DevIcon, type LucideProps } from "lucide-react"
export const FolderSearch2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-search-2`} />
    </svg>
  )
