import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { MoveUpRight as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function MoveUpRight({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("MoveUpRight", size, width, height);
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
  return  renderUse("move-up-right", width, height, size, SPRITE_PATH, props)
}
