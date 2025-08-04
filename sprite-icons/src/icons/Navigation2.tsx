import { Navigation2 as DevIcon, type LucideProps } from "lucide-react"
export const Navigation2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#navigation-2`} />
    </svg>
  )
