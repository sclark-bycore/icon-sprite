import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { WifiZero as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function WifiZero({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("WifiZero", size, width, height);
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
  return  renderUse("wifi-zero", width, height, size, SPRITE_PATH, props)
}
