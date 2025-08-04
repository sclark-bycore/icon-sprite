import { FileType2 as DevIcon, type LucideProps } from "lucide-react"
export const FileType2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-type-2`} />
    </svg>
  )
