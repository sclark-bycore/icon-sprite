import { BanknoteArrowUp as DevIcon, type LucideProps } from "lucide-react"
export const BanknoteArrowUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#banknote-arrow-up`} />
    </svg>
  )
