import { Globe as DevIcon, type LucideProps } from "lucide-react"
export const Globe: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#globe`} />
    </svg>
  )
