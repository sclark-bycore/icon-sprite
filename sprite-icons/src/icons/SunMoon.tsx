import { SunMoon as DevIcon, type LucideProps } from "lucide-react"
export const SunMoon: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sun-moon`} />
    </svg>
  )
