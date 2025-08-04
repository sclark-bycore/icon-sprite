import { HardDriveDownload as DevIcon, type LucideProps } from "lucide-react"
export const HardDriveDownload: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hard-drive-download`} />
    </svg>
  )
