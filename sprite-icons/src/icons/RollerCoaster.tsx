import { RollerCoaster as DevIcon, type LucideProps } from "lucide-react"
export const RollerCoaster: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#roller-coaster`} />
    </svg>
  )
