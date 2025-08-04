import { PhilippinePeso as DevIcon, type LucideProps } from "lucide-react"
export const PhilippinePeso: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#philippine-peso`} />
    </svg>
  )
