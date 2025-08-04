import { CloudSun as DevIcon, type LucideProps } from "lucide-react"
export const CloudSun: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-sun`} />
    </svg>
  )
