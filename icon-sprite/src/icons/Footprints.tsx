import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Footprints as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Footprints({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Footprints", size, width, height);
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
  return  renderUse("footprints", width, height, size, SPRITE_PATH, props)
}
