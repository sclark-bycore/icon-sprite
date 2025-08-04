import { Flashlight as DevIcon, type LucideProps } from "lucide-react"
export const Flashlight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flashlight`} />
    </svg>
  )
