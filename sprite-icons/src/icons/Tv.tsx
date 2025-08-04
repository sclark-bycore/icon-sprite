import { Tv as DevIcon, type LucideProps } from "lucide-react"
export const Tv: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tv`} />
    </svg>
  )
