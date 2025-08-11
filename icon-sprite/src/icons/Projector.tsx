import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Projector as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Projector({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Projector", size, width, height);
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
  return  renderUse("projector", width, height, size, SPRITE_PATH, props)
}
