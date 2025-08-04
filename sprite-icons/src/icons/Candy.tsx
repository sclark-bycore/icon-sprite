import { Candy as DevIcon, type LucideProps } from "lucide-react"
export const Candy: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#candy`} />
    </svg>
  )
