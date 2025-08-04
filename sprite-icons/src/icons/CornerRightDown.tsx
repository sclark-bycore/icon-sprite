import { CornerRightDown as DevIcon, type LucideProps } from "lucide-react"
export const CornerRightDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#corner-right-down`} />
    </svg>
  )
