import { PcCase as DevIcon, type LucideProps } from "lucide-react"
export const PcCase: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pc-case`} />
    </svg>
  )
