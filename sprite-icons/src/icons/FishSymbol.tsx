import { FishSymbol as DevIcon, type LucideProps } from "lucide-react"
export const FishSymbol: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fish-symbol`} />
    </svg>
  )
