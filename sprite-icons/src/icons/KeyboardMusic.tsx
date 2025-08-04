import { KeyboardMusic as DevIcon, type LucideProps } from "lucide-react"
export const KeyboardMusic: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#keyboard-music`} />
    </svg>
  )
