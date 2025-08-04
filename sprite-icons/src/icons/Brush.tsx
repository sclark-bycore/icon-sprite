import { Brush as DevIcon, type LucideProps } from "lucide-react"
export const Brush: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#brush`} />
    </svg>
  )
