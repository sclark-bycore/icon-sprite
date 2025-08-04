import { SoapDispenserDroplet as DevIcon, type LucideProps } from "lucide-react"
export const SoapDispenserDroplet: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#soap-dispenser-droplet`} />
    </svg>
  )
