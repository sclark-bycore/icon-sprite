import { BaggageClaim as DevIcon, type LucideProps } from "lucide-react"
export const BaggageClaim: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#baggage-claim`} />
    </svg>
  )
