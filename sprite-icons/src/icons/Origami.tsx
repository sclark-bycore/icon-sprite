import { Origami as DevIcon, type LucideProps } from "lucide-react"
export const Origami: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#origami`} />
    </svg>
  )
