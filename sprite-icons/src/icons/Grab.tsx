import { Grab as DevIcon, type LucideProps } from "lucide-react"
export const Grab: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#grab`} />
    </svg>
  )
