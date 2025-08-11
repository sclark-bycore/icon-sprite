import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Zap as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Zap({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Zap", size, width, height);
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
  return  renderUse("zap", width, height, size, SPRITE_PATH, props)
}
