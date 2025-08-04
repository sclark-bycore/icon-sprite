import { ThermometerSun as DevIcon, type LucideProps } from "lucide-react"
export const ThermometerSun: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#thermometer-sun`} />
    </svg>
  )
