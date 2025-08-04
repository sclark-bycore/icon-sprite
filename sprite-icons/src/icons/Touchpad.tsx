import { Touchpad as DevIcon, type LucideProps } from "lucide-react"
export const Touchpad: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#touchpad`} />
    </svg>
  )
