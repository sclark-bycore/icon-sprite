import { FileJson as DevIcon, type LucideProps } from "lucide-react"
export const FileJson: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-json`} />
    </svg>
  )
