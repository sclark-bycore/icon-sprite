import { Gamepad2 as DevIcon, type LucideProps } from "lucide-react"
export const Gamepad2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#gamepad-2`} />
    </svg>
  )
