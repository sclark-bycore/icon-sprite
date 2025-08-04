import { DnaOff as DevIcon, type LucideProps } from "lucide-react"
export const DnaOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#dna-off`} />
    </svg>
  )
