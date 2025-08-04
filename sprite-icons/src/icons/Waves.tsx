import { Waves as DevIcon, type LucideProps } from "lucide-react"
export const Waves: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#waves`} />
    </svg>
  )
