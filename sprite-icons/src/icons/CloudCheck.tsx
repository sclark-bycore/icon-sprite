import { CloudCheck as DevIcon, type LucideProps } from "lucide-react"
export const CloudCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-check`} />
    </svg>
  )
