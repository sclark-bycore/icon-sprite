import { PencilOff as DevIcon, type LucideProps } from "lucide-react"
export const PencilOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pencil-off`} />
    </svg>
  )
