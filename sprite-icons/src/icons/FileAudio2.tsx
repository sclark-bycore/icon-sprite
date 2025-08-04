import { FileAudio2 as DevIcon, type LucideProps } from "lucide-react"
export const FileAudio2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-audio-2`} />
    </svg>
  )
