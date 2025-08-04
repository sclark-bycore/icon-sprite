import { Layers2 as DevIcon, type LucideProps } from "lucide-react"
export const Layers2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#layers-2`} />
    </svg>
  )
