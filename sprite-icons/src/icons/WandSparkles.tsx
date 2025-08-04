import { WandSparkles as DevIcon, type LucideProps } from "lucide-react"
export const WandSparkles: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wand-sparkles`} />
    </svg>
  )
