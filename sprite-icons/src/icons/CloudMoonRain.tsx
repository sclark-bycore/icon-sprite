import { CloudMoonRain as DevIcon, type LucideProps } from "lucide-react"
export const CloudMoonRain: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#cloud-moon-rain`} />
    </svg>
  )
