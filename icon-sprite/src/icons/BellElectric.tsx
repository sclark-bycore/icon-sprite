import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { BellElectric as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function BellElectric({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("BellElectric", size, width, height);
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
  return  renderUse("bell-electric", width, height, size, SPRITE_PATH, props)
}
