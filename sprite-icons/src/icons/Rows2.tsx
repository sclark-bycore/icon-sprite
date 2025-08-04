import { Rows2 as DevIcon, type LucideProps } from "lucide-react"
export const Rows2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rows-2`} />
    </svg>
  )
