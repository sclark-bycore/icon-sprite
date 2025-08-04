import { CloudUpload as DevIcon, type LucideProps } from "lucide-react"
export const CloudUpload: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-upload`} />
    </svg>
  )
