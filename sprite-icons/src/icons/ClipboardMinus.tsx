import { ClipboardMinus as DevIcon, type LucideProps } from "lucide-react"
export const ClipboardMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clipboard-minus`} />
    </svg>
  )
