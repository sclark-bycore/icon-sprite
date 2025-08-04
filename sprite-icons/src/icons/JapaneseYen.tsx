import { JapaneseYen as DevIcon, type LucideProps } from "lucide-react"
export const JapaneseYen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#japanese-yen`} />
    </svg>
  )
