import { Tractor as DevIcon, type LucideProps } from "lucide-react"
export const Tractor: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tractor`} />
    </svg>
  )
