import { Hop as DevIcon, type LucideProps } from "lucide-react"
export const Hop: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hop`} />
    </svg>
  )
