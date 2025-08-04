import { SlidersVertical as DevIcon, type LucideProps } from "lucide-react"
export const SlidersVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sliders-vertical`} />
    </svg>
  )
