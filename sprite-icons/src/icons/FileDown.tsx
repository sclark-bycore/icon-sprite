import { FileDown as DevIcon, type LucideProps } from "lucide-react"
export const FileDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-down`} />
    </svg>
  )
