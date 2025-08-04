import { TvMinimal as DevIcon, type LucideProps } from "lucide-react"
export const TvMinimal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tv-minimal`} />
    </svg>
  )
