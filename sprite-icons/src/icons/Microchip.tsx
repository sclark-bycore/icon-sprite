import { Microchip as DevIcon, type LucideProps } from "lucide-react"
export const Microchip: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#microchip`} />
    </svg>
  )
