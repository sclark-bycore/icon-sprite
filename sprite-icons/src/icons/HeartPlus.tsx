import { HeartPlus as DevIcon, type LucideProps } from "lucide-react"
export const HeartPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heart-plus`} />
    </svg>
  )
