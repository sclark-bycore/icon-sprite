import { Drum as DevIcon, type LucideProps } from "lucide-react"
export const Drum: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#drum`} />
    </svg>
  )
