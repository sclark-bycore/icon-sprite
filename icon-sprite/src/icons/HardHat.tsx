import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { HardHat as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function HardHat({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("HardHat", size, width, height);
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
  return  renderUse("hard-hat", width, height, size, SPRITE_PATH, props)
}
