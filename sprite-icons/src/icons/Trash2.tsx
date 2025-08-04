import { Trash2 as DevIcon, type LucideProps } from "lucide-react"
import { SPRITE_PATH } from "../../src/config.js";
interface Props extends LucideProps { size?: number | string; }
export const Trash2: React.FC<Props> = ({size, ...props}) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} size={size}/>
  ) : (
    <svg {...props}
    {...(size != null ? { width: size, height: size } : {})}
		>
      <use href={`${SPRITE_PATH}#trash-2`} />
    </svg>
  )
