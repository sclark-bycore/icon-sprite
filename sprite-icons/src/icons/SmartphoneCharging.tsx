import { SmartphoneCharging as DevIcon, type LucideProps } from "lucide-react"
export const SmartphoneCharging: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#smartphone-charging`} />
    </svg>
  )
