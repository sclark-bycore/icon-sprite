import { VibrateOff as DevIcon, type LucideProps } from "lucide-react"
export const VibrateOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#vibrate-off`} />
    </svg>
  )
