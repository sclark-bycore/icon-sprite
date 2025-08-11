import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { ChartNoAxesColumnDecreasing as DevIcon } from "lucide-react"
import { renderUse,type IconProps,} from "../_shared.js";



export function ChartNoAxesColumnDecreasing({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ChartNoAxesColumnDecreasing", size, width, height);
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
  return  renderUse("chart-no-axes-column-decreasing", width, height, size, SPRITE_PATH, props)
}
