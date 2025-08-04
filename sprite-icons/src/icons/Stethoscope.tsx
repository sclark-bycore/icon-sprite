import { Stethoscope as DevIcon, type LucideProps } from "lucide-react"
export const Stethoscope: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#stethoscope`} />
    </svg>
  )
