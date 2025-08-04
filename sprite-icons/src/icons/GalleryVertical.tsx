import { GalleryVertical as DevIcon, type LucideProps } from "lucide-react"
export const GalleryVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#gallery-vertical`} />
    </svg>
  )
