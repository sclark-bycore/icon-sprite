import { Building as DevIcon, type LucideProps } from "lucide-react"
export const Building: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#building`} />
    </svg>
  )
