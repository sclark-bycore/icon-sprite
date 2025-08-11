import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Blinds as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Blinds({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Blinds", size, width, height);
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
  return  renderUse("blinds", width, height, size, SPRITE_PATH, props)
}
