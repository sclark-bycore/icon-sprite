import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Wallet as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Wallet({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Wallet", size, width, height);
  if (process.env.NODE_ENV !== "production" && DevIcon) {
    return (
      <DevIcon
        {...(props as any)}
        {...(size != null ? { size } : {})}
        {...(width != null ? { width } : {})}
        {...(height != null ? { height } : {})}
      />
    );
  }
  return  renderUse("wallet", width, height, size, SPRITE_PATH, props)
}
