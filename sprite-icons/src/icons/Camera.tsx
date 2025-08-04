import { Camera as DevIcon, type LucideProps } from "lucide-react"
export const Camera: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#camera`} />
    </svg>
  )
