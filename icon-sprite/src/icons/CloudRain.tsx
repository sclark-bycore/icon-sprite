import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { CloudRain as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function CloudRain({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("CloudRain", size, width, height);
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
  return  renderUse("cloud-rain", width, height, size, SPRITE_PATH, props)
}
