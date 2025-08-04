import { Wifi as DevIcon, type LucideProps } from "lucide-react"
export const Wifi: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wifi`} />
    </svg>
  )
