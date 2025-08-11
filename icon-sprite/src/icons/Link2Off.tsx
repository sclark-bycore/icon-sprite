import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Link2Off as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Link2Off({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Link2Off", size, width, height);
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
  return  renderUse("link-2-off", width, height, size, SPRITE_PATH, props)
}
