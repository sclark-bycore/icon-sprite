import { BluetoothOff as DevIcon, type LucideProps } from "lucide-react"
export const BluetoothOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bluetooth-off`} />
    </svg>
  )
