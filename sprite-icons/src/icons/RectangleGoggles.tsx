import { RectangleGoggles as DevIcon, type LucideProps } from "lucide-react"
export const RectangleGoggles: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rectangle-goggles`} />
    </svg>
  )
