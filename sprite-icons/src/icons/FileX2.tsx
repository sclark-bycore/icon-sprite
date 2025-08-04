import { FileX2 as DevIcon, type LucideProps } from "lucide-react"
export const FileX2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-x-2`} />
    </svg>
  )
