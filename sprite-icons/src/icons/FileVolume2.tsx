import { FileVolume2 as DevIcon, type LucideProps } from "lucide-react"
export const FileVolume2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-volume-2`} />
    </svg>
  )
