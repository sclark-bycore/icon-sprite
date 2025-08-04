import { Microwave as DevIcon, type LucideProps } from "lucide-react"
export const Microwave: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#microwave`} />
    </svg>
  )
