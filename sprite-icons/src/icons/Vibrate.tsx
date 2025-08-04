import { Vibrate as DevIcon, type LucideProps } from "lucide-react"
export const Vibrate: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#vibrate`} />
    </svg>
  )
