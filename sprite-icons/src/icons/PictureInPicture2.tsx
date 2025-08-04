import { PictureInPicture2 as DevIcon, type LucideProps } from "lucide-react"
export const PictureInPicture2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#picture-in-picture-2`} />
    </svg>
  )
