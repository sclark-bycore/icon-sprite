import { WavesLadder as DevIcon, type LucideProps } from "lucide-react"
export const WavesLadder: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#waves-ladder`} />
    </svg>
  )
