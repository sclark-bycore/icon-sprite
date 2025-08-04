import { LightbulbOff as DevIcon, type LucideProps } from "lucide-react"
export const LightbulbOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lightbulb-off`} />
    </svg>
  )
