import { CookingPot as DevIcon, type LucideProps } from "lucide-react"
export const CookingPot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cooking-pot`} />
    </svg>
  )
