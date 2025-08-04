import { UtilityPole as DevIcon, type LucideProps } from "lucide-react"
export const UtilityPole: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#utility-pole`} />
    </svg>
  )
