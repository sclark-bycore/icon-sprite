import { Drumstick as DevIcon, type LucideProps } from "lucide-react"
export const Drumstick: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#drumstick`} />
    </svg>
  )
