import { FileJson2 as DevIcon, type LucideProps } from "lucide-react"
export const FileJson2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-json-2`} />
    </svg>
  )
