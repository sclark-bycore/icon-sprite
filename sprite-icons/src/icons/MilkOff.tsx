import { MilkOff as DevIcon, type LucideProps } from "lucide-react"
export const MilkOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#milk-off`} />
    </svg>
  )
