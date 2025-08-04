import { FolderHeart as DevIcon, type LucideProps } from "lucide-react"
export const FolderHeart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#folder-heart`} />
    </svg>
  )
