import { BadgeSwissFranc as DevIcon, type LucideProps } from "lucide-react"
export const BadgeSwissFranc: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-swiss-franc`} />
    </svg>
  )
