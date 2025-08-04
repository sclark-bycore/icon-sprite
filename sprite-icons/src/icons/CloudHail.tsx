import { CloudHail as DevIcon, type LucideProps } from "lucide-react"
export const CloudHail: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-hail`} />
    </svg>
  )
