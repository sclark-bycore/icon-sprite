import { Loader as DevIcon, type LucideProps } from "lucide-react"
export const Loader: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#loader`} />
    </svg>
  )
