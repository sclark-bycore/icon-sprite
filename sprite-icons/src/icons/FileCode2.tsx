import { FileCode2 as DevIcon, type LucideProps } from "lucide-react"
export const FileCode2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-code-2`} />
    </svg>
  )
