import { ChevronsLeftRightEllipsis as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsLeftRightEllipsis: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-left-right-ellipsis`} />
    </svg>
  )
