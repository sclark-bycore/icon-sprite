import { Gem as DevIcon, type LucideProps } from "lucide-react"
export const Gem: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#gem`} />
    </svg>
  )
