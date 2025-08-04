import { RedoDot as DevIcon, type LucideProps } from "lucide-react"
export const RedoDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#redo-dot`} />
    </svg>
  )
