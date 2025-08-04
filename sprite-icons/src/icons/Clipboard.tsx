import { Clipboard as DevIcon, type LucideProps } from "lucide-react"
export const Clipboard: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#clipboard`} />
    </svg>
  )
