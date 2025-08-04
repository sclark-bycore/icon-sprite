import { FolderCode as DevIcon, type LucideProps } from "lucide-react"
export const FolderCode: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-code`} />
    </svg>
  )
