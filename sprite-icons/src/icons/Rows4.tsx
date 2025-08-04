import { Rows4 as DevIcon, type LucideProps } from "lucide-react"
export const Rows4: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rows-4`} />
    </svg>
  )
