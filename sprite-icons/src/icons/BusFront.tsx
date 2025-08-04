import { BusFront as DevIcon, type LucideProps } from "lucide-react"
export const BusFront: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bus-front`} />
    </svg>
  )
