import { PrinterCheck as DevIcon, type LucideProps } from "lucide-react"
export const PrinterCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#printer-check`} />
    </svg>
  )
