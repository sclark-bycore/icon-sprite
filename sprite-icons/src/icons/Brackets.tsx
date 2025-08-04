import { Brackets as DevIcon, type LucideProps } from "lucide-react"
export const Brackets: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#brackets`} />
    </svg>
  )
