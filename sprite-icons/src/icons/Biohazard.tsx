import { Biohazard as DevIcon, type LucideProps } from "lucide-react"
export const Biohazard: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#biohazard`} />
    </svg>
  )
