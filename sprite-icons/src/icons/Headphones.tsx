import { Headphones as DevIcon, type LucideProps } from "lucide-react"
export const Headphones: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#headphones`} />
    </svg>
  )
