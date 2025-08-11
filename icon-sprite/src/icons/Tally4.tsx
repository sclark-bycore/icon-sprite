import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Tally4 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Tally4({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Tally4", size, width, height);
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
  return  renderUse("tally-4", width, height, size, SPRITE_PATH, props)
}
