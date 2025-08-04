import { RailSymbol as DevIcon, type LucideProps } from "lucide-react"
export const RailSymbol: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rail-symbol`} />
    </svg>
  )
