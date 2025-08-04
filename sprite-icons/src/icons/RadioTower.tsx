import { RadioTower as DevIcon, type LucideProps } from "lucide-react"
export const RadioTower: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#radio-tower`} />
    </svg>
  )
