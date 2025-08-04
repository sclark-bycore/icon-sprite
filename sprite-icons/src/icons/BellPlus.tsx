import { BellPlus as DevIcon, type LucideProps } from "lucide-react"
export const BellPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bell-plus`} />
    </svg>
  )
