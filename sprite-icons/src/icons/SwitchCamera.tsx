import { SwitchCamera as DevIcon, type LucideProps } from "lucide-react"
export const SwitchCamera: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#switch-camera`} />
    </svg>
  )
