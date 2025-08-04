import { Navigation2Off as DevIcon, type LucideProps } from "lucide-react"
export const Navigation2Off: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#navigation-2-off`} />
    </svg>
  )
