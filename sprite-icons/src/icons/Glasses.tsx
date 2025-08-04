import { Glasses as DevIcon, type LucideProps } from "lucide-react"
export const Glasses: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#glasses`} />
    </svg>
  )
