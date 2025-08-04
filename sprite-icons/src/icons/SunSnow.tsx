import { SunSnow as DevIcon, type LucideProps } from "lucide-react"
export const SunSnow: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sun-snow`} />
    </svg>
  )
