import { Image as DevIcon, type LucideProps } from "lucide-react"
export const Image: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#image`} />
    </svg>
  )
