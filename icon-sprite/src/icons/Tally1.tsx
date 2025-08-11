import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { Tally1 as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function Tally1({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("Tally1", size, width, height);
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
  return  renderUse("tally-1", width, height, size, SPRITE_PATH, props)
}
