import { Flower as DevIcon, type LucideProps } from "lucide-react"
export const Flower: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flower`} />
    </svg>
  )
