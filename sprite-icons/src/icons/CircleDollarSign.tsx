import { CircleDollarSign as DevIcon, type LucideProps } from "lucide-react"
export const CircleDollarSign: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-dollar-sign`} />
    </svg>
  )
