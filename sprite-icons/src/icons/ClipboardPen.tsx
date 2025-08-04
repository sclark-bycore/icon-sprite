import { ClipboardPen as DevIcon, type LucideProps } from "lucide-react"
export const ClipboardPen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clipboard-pen`} />
    </svg>
  )
