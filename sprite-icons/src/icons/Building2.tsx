import { Building2 as DevIcon, type LucideProps } from "lucide-react"
export const Building2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#building-2`} />
    </svg>
  )
