import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Brush as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Brush({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Brush", size, width, height);
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
  return  renderUse("brush", width, height, size, SPRITE_PATH, props)
}
