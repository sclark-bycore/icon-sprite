import { SunMedium as DevIcon, type LucideProps } from "lucide-react"
export const SunMedium: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sun-medium`} />
    </svg>
  )
