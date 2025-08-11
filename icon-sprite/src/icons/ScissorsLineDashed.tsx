import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ScissorsLineDashed as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ScissorsLineDashed({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ScissorsLineDashed", size, width, height);
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
  return  renderUse("scissors-line-dashed", width, height, size, SPRITE_PATH, props)
}
