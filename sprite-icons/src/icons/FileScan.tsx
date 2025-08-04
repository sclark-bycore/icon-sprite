import { FileScan as DevIcon, type LucideProps } from "lucide-react"
export const FileScan: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-scan`} />
    </svg>
  )
