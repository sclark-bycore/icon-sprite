import { FlagOff as DevIcon, type LucideProps } from "lucide-react"
export const FlagOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flag-off`} />
    </svg>
  )
