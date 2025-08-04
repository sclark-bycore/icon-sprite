import { Fullscreen as DevIcon, type LucideProps } from "lucide-react"
export const Fullscreen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fullscreen`} />
    </svg>
  )
