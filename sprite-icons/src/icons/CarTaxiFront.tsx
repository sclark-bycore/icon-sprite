import { CarTaxiFront as DevIcon, type LucideProps } from "lucide-react"
export const CarTaxiFront: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#car-taxi-front`} />
    </svg>
  )
