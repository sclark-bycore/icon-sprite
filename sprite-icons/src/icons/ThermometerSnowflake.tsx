import { ThermometerSnowflake as DevIcon, type LucideProps } from "lucide-react"
export const ThermometerSnowflake: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#thermometer-snowflake`} />
    </svg>
  )
