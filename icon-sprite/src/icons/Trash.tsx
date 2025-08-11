import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Trash as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Trash({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Trash", size, width, height);
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
  return  renderUse("trash", width, height, size, SPRITE_PATH, props)
}
