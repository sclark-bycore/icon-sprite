import { NotebookText as DevIcon, type LucideProps } from "lucide-react"
export const NotebookText: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#notebook-text`} />
    </svg>
  )
