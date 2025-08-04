import { ArrowUpFromLine as DevIcon, type LucideProps } from "lucide-react"
import { SPRITE_PATH } from "../../src/config.js";
interface Props extends LucideProps { size?: number | string; }
export const ArrowUpFromLine: React.FC<Props> = ({size, ...props}) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} size={size}/>
  ) : (
    <svg {...props}
    {...(size != null ? { width: size, height: size } : {})}
		>
      <use href={`${SPRITE_PATH}#arrow-up-from-line`} />
    </svg>
  )
