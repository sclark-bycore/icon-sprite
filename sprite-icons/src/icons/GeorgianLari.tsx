import { GeorgianLari as DevIcon, type LucideProps } from "lucide-react"
export const GeorgianLari: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#georgian-lari`} />
    </svg>
  )
