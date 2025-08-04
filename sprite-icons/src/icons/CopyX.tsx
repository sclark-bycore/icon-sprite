import { CopyX as DevIcon, type LucideProps } from "lucide-react"
export const CopyX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#copy-x`} />
    </svg>
  )
