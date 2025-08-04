import { FileArchive as DevIcon, type LucideProps } from "lucide-react"
export const FileArchive: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-archive`} />
    </svg>
  )
