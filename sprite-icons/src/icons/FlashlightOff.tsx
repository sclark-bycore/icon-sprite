import { FlashlightOff as DevIcon, type LucideProps } from "lucide-react"
export const FlashlightOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flashlight-off`} />
    </svg>
  )
