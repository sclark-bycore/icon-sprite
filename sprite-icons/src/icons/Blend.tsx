import { Blend as DevIcon, type LucideProps } from "lucide-react"
export const Blend: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#blend`} />
    </svg>
  )
