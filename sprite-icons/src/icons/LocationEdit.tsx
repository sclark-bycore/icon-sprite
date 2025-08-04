import { LocationEdit as DevIcon, type LucideProps } from "lucide-react"
export const LocationEdit: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#location-edit`} />
    </svg>
  )
