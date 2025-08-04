import { BluetoothSearching as DevIcon, type LucideProps } from "lucide-react"
export const BluetoothSearching: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bluetooth-searching`} />
    </svg>
  )
