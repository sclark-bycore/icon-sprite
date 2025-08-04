import { SaudiRiyal as DevIcon, type LucideProps } from "lucide-react"
export const SaudiRiyal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#saudi-riyal`} />
    </svg>
  )
