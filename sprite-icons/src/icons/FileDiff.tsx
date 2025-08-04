import { FileDiff as DevIcon, type LucideProps } from "lucide-react"
export const FileDiff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-diff`} />
    </svg>
  )
