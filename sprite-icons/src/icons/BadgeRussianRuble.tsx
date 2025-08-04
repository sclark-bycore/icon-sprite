import { BadgeRussianRuble as DevIcon, type LucideProps } from "lucide-react"
export const BadgeRussianRuble: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-russian-ruble`} />
    </svg>
  )
