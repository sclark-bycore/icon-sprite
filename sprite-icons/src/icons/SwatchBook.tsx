import { SwatchBook as DevIcon, type LucideProps } from "lucide-react"
export const SwatchBook: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#swatch-book`} />
    </svg>
  )
