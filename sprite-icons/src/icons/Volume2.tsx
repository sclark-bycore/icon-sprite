import { Volume2 as DevIcon, type LucideProps } from "lucide-react"
export const Volume2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#volume-2`} />
    </svg>
  )
