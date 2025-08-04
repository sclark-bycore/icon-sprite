import { RectangleHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const RectangleHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rectangle-horizontal`} />
    </svg>
  )
