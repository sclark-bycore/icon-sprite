import { FileKey2 as DevIcon, type LucideProps } from "lucide-react"
export const FileKey2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-key-2`} />
    </svg>
  )
