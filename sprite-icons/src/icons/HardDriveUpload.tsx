import { HardDriveUpload as DevIcon, type LucideProps } from "lucide-react"
export const HardDriveUpload: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hard-drive-upload`} />
    </svg>
  )
