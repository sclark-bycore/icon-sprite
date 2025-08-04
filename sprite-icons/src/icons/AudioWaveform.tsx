import { AudioWaveform as DevIcon, type LucideProps } from "lucide-react"
export const AudioWaveform: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#audio-waveform`} />
    </svg>
  )
