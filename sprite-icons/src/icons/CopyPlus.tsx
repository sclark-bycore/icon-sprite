import { CopyPlus as DevIcon, type LucideProps } from "lucide-react"
export const CopyPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#copy-plus`} />
    </svg>
  )
