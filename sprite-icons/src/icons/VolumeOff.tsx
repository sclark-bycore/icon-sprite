import { VolumeOff as DevIcon, type LucideProps } from "lucide-react"
export const VolumeOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#volume-off`} />
    </svg>
  )
