import { IceCreamCone as DevIcon, type LucideProps } from "lucide-react"
export const IceCreamCone: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ice-cream-cone`} />
    </svg>
  )
