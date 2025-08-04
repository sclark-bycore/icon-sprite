import { HeadphoneOff as DevIcon, type LucideProps } from "lucide-react"
export const HeadphoneOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#headphone-off`} />
    </svg>
  )
