import { Radical as DevIcon, type LucideProps } from "lucide-react"
export const Radical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#radical`} />
    </svg>
  )
