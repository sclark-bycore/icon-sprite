import { TrainFrontTunnel as DevIcon, type LucideProps } from "lucide-react"
export const TrainFrontTunnel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#train-front-tunnel`} />
    </svg>
  )
