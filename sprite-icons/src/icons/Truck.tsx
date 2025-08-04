import { Truck as DevIcon, type LucideProps } from "lucide-react"
export const Truck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#truck`} />
    </svg>
  )
