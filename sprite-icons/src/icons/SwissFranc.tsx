import { SwissFranc as DevIcon, type LucideProps } from "lucide-react"
export const SwissFranc: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#swiss-franc`} />
    </svg>
  )
