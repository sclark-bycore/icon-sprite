import { PenOff as DevIcon, type LucideProps } from "lucide-react"
export const PenOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pen-off`} />
    </svg>
  )
