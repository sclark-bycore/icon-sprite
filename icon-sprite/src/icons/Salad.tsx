import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Salad as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Salad({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Salad", size, width, height);
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
  return  renderUse("salad", width, height, size, SPRITE_PATH, props)
}
