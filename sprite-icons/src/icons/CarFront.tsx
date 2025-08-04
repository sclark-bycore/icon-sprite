import { CarFront as DevIcon, type LucideProps } from "lucide-react"
export const CarFront: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#car-front`} />
    </svg>
  )
