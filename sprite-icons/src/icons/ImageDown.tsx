import { ImageDown as DevIcon, type LucideProps } from "lucide-react"
export const ImageDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#image-down`} />
    </svg>
  )
