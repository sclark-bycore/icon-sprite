import { TypeOutline as DevIcon, type LucideProps } from "lucide-react"
export const TypeOutline: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#type-outline`} />
    </svg>
  )
