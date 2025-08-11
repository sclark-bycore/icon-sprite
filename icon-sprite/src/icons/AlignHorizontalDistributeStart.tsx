import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { AlignHorizontalDistributeStart as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function AlignHorizontalDistributeStart({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("AlignHorizontalDistributeStart", size, width, height);
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
  return  renderUse("align-horizontal-distribute-start", width, height, size, SPRITE_PATH, props)
}
