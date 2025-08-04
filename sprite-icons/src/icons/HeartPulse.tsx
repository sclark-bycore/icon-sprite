import { HeartPulse as DevIcon, type LucideProps } from "lucide-react"
export const HeartPulse: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heart-pulse`} />
    </svg>
  )
