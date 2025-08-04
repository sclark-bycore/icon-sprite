import { Contact as DevIcon, type LucideProps } from "lucide-react"
export const Contact: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#contact`} />
    </svg>
  )
