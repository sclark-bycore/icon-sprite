import { VideoOff as DevIcon, type LucideProps } from "lucide-react"
export const VideoOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#video-off`} />
    </svg>
  )
