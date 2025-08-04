import { VolumeX as DevIcon, type LucideProps } from "lucide-react"
export const VolumeX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#volume-x`} />
    </svg>
  )
