import { SmartphoneNfc as DevIcon, type LucideProps } from "lucide-react"
export const SmartphoneNfc: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#smartphone-nfc`} />
    </svg>
  )
