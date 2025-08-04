import { Keyboard as DevIcon, type LucideProps } from "lucide-react"
export const Keyboard: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#keyboard`} />
    </svg>
  )
