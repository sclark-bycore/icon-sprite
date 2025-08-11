import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Repeat1 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Repeat1({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Repeat1", size, width, height);
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
  return  renderUse("repeat-1", width, height, size, SPRITE_PATH, props)
}
