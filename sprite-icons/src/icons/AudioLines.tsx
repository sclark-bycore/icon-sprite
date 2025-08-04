import { AudioLines as DevIcon, type LucideProps } from "lucide-react"
export const AudioLines: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#audio-lines`} />
    </svg>
  )
