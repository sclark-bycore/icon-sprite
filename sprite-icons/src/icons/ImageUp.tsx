import { ImageUp as DevIcon, type LucideProps } from "lucide-react"
export const ImageUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#image-up`} />
    </svg>
  )
