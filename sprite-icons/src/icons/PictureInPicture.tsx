import { PictureInPicture as DevIcon, type LucideProps } from "lucide-react"
export const PictureInPicture: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#picture-in-picture`} />
    </svg>
  )
