import { Octagon as DevIcon, type LucideProps } from "lucide-react"
export const Octagon: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#octagon`} />
    </svg>
  )
