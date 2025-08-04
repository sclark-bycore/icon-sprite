import { ShowerHead as DevIcon, type LucideProps } from "lucide-react"
export const ShowerHead: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shower-head`} />
    </svg>
  )
