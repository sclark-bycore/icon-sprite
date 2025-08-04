import { ClipboardList as DevIcon, type LucideProps } from "lucide-react"
export const ClipboardList: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clipboard-list`} />
    </svg>
  )
