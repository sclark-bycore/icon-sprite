import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Unplug as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Unplug({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Unplug", size, width, height);
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
  return  renderUse("unplug", width, height, size, SPRITE_PATH, props)
}
