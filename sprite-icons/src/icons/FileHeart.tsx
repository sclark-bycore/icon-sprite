import { FileHeart as DevIcon, type LucideProps } from "lucide-react"
export const FileHeart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-heart`} />
    </svg>
  )
