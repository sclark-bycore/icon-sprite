import { TramFront as DevIcon, type LucideProps } from "lucide-react"
export const TramFront: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tram-front`} />
    </svg>
  )
