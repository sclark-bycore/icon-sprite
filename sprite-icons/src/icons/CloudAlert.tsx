import { CloudAlert as DevIcon, type LucideProps } from "lucide-react"
export const CloudAlert: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-alert`} />
    </svg>
  )
