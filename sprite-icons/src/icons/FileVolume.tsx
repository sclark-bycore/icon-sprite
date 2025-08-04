import { FileVolume as DevIcon, type LucideProps } from "lucide-react"
export const FileVolume: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-volume`} />
    </svg>
  )
