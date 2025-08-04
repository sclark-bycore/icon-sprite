import { Share2 as DevIcon, type LucideProps } from "lucide-react"
export const Share2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#share-2`} />
    </svg>
  )
