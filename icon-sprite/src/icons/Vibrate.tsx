import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Vibrate as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Vibrate({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Vibrate", size, width, height);
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
  return  renderUse("vibrate", width, height, size, SPRITE_PATH, props)
}
