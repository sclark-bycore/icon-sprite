import { FileSliders as DevIcon, type LucideProps } from "lucide-react"
export const FileSliders: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-sliders`} />
    </svg>
  )
