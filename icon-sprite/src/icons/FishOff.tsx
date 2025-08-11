import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { FishOff as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function FishOff({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("FishOff", size, width, height);
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
  return  renderUse("fish-off", width, height, size, SPRITE_PATH, props)
}
