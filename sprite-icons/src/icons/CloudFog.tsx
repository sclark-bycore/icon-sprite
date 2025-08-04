import { CloudFog as DevIcon, type LucideProps } from "lucide-react"
export const CloudFog: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-fog`} />
    </svg>
  )
