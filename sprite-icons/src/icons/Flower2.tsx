import { Flower2 as DevIcon, type LucideProps } from "lucide-react"
export const Flower2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flower-2`} />
    </svg>
  )
