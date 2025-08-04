import { Airplay as DevIcon, type LucideProps } from "lucide-react"
export const Airplay: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#airplay`} />
    </svg>
  )
