import { BanknoteArrowDown as DevIcon, type LucideProps } from "lucide-react"
export const BanknoteArrowDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#banknote-arrow-down`} />
    </svg>
  )
