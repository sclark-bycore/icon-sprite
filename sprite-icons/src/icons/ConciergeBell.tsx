import { ConciergeBell as DevIcon, type LucideProps } from "lucide-react"
export const ConciergeBell: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#concierge-bell`} />
    </svg>
  )
