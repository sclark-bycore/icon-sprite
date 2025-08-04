import { BicepsFlexed as DevIcon, type LucideProps } from "lucide-react"
export const BicepsFlexed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#biceps-flexed`} />
    </svg>
  )
