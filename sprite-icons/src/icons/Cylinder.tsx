import { Cylinder as DevIcon, type LucideProps } from "lucide-react"
export const Cylinder: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cylinder`} />
    </svg>
  )
