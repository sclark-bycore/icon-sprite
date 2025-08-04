import { LampCeiling as DevIcon, type LucideProps } from "lucide-react"
export const LampCeiling: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lamp-ceiling`} />
    </svg>
  )
