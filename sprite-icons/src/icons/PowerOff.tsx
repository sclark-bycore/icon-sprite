import { PowerOff as DevIcon, type LucideProps } from "lucide-react"
export const PowerOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#power-off`} />
    </svg>
  )
