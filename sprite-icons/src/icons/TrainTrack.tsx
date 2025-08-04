import { TrainTrack as DevIcon, type LucideProps } from "lucide-react"
export const TrainTrack: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#train-track`} />
    </svg>
  )
