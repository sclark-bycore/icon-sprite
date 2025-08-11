import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Navigation2Off as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Navigation2Off({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Navigation2Off", size, width, height);
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
  return  renderUse("navigation-2-off", width, height, size, SPRITE_PATH, props)
}
