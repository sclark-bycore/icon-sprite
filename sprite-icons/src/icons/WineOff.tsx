import { WineOff as DevIcon, type LucideProps } from "lucide-react"
export const WineOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wine-off`} />
    </svg>
  )
