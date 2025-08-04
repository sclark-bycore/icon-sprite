import { HeartOff as DevIcon, type LucideProps } from "lucide-react"
export const HeartOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#heart-off`} />
    </svg>
  )
