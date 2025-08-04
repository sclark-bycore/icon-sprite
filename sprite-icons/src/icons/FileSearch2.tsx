import { FileSearch2 as DevIcon, type LucideProps } from "lucide-react"
export const FileSearch2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-search-2`} />
    </svg>
  )
