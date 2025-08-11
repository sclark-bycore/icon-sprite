import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { SquareMousePointer as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function SquareMousePointer({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("SquareMousePointer", size, width, height);
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
  return  renderUse("square-mouse-pointer", width, height, size, SPRITE_PATH, props)
}
