import { FolderDot as DevIcon, type LucideProps } from "lucide-react"
export const FolderDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-dot`} />
    </svg>
  )
