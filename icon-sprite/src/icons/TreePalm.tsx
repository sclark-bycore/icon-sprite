import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { createRequire } from "module";
import { renderUse,type IconProps,} from "../_shared.js";

let DevIcon: ((p: IconProps) => React.JSX.Element) | undefined;
if (process.env.NODE_ENV !== "production") {
  const require = createRequire(import.meta.url);
  const mod = require("lucide-react");
  DevIcon = mod.TreePalm as any;
}

export function TreePalm({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("TreePalm", size, width, height);
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
  return  renderUse("tree-palm", width, height, size, SPRITE_PATH, props)
}
