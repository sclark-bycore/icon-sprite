import { Meh as DevIcon, type LucideProps } from "lucide-react"
export const Meh: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#meh`} />
    </svg>
  )
