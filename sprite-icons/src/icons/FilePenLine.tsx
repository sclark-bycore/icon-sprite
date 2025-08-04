import { FilePenLine as DevIcon, type LucideProps } from "lucide-react"
export const FilePenLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-pen-line`} />
    </svg>
  )
