import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { CircleSlash2 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function CircleSlash2({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("CircleSlash2", size, width, height);
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
  return  renderUse("circle-slash-2", width, height, size, SPRITE_PATH, props)
}
