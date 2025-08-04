import { Cross as DevIcon, type LucideProps } from "lucide-react"
export const Cross: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cross`} />
    </svg>
  )
