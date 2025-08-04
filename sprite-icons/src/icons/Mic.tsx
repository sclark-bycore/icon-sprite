import { Mic as DevIcon, type LucideProps } from "lucide-react"
export const Mic: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mic`} />
    </svg>
  )
