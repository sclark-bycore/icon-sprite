import { IdCardLanyard as DevIcon, type LucideProps } from "lucide-react"
export const IdCardLanyard: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#id-card-lanyard`} />
    </svg>
  )
