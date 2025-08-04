import { NutOff as DevIcon, type LucideProps } from "lucide-react"
export const NutOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#nut-off`} />
    </svg>
  )
