import { Rows3 as DevIcon, type LucideProps } from "lucide-react"
export const Rows3: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rows-3`} />
    </svg>
  )
