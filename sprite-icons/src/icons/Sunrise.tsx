import { Sunrise as DevIcon, type LucideProps } from "lucide-react"
export const Sunrise: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sunrise`} />
    </svg>
  )
