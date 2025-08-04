import { GalleryHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const GalleryHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#gallery-horizontal`} />
    </svg>
  )
