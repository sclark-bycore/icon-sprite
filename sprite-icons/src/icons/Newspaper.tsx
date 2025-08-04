import { Newspaper as DevIcon, type LucideProps } from "lucide-react"
export const Newspaper: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#newspaper`} />
    </svg>
  )
