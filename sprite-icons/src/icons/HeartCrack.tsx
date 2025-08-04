import { HeartCrack as DevIcon, type LucideProps } from "lucide-react"
export const HeartCrack: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heart-crack`} />
    </svg>
  )
