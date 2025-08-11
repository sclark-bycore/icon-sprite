import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Crop as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Crop({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Crop", size, width, height);
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
  return  renderUse("crop", width, height, size, SPRITE_PATH, props)
}
