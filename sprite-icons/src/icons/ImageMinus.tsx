import { ImageMinus as DevIcon, type LucideProps } from "lucide-react"
export const ImageMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#image-minus`} />
    </svg>
  )
