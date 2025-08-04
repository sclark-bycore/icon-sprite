import { GlobeLock as DevIcon, type LucideProps } from "lucide-react"
export const GlobeLock: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#globe-lock`} />
    </svg>
  )
