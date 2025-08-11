import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { MoveDownRight as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function MoveDownRight({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("MoveDownRight", size, width, height);
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
  return  renderUse("move-down-right", width, height, size, SPRITE_PATH, props)
}
