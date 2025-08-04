import { BottleWine as DevIcon, type LucideProps } from "lucide-react"
export const BottleWine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bottle-wine`} />
    </svg>
  )
