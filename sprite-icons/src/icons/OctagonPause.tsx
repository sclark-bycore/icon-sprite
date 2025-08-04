import { OctagonPause as DevIcon, type LucideProps } from "lucide-react"
export const OctagonPause: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#octagon-pause`} />
    </svg>
  )
