import { Snowflake as DevIcon, type LucideProps } from "lucide-react"
export const Snowflake: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#snowflake`} />
    </svg>
  )
