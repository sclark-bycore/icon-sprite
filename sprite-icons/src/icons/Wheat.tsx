import { Wheat as DevIcon, type LucideProps } from "lucide-react"
export const Wheat: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wheat`} />
    </svg>
  )
