import { EggOff as DevIcon, type LucideProps } from "lucide-react"
export const EggOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#egg-off`} />
    </svg>
  )
