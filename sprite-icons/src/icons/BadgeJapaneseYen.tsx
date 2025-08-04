import { BadgeJapaneseYen as DevIcon, type LucideProps } from "lucide-react"
export const BadgeJapaneseYen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-japanese-yen`} />
    </svg>
  )
