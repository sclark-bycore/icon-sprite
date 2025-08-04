import { Cone as DevIcon, type LucideProps } from "lucide-react"
export const Cone: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cone`} />
    </svg>
  )
