import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Accessibility as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Accessibility({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Accessibility", size, width, height);
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
  return  renderUse("accessibility", width, height, size, SPRITE_PATH, props)
}
