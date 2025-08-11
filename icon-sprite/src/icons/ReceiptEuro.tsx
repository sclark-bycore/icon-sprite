import { SPRITE_PATH } from "../config.js";
import { warnMissingIconSize } from "../utils.js";
import { createRequire } from "module";
import { renderUse,type IconProps,} from "../_shared.js";

let DevIcon: ((p: IconProps) => React.JSX.Element) | undefined;
if (process.env.NODE_ENV !== "production") {
  const require = createRequire(import.meta.url);
  const mod = require("lucide-react");
  DevIcon = mod.ReceiptEuro as any;
}

export function ReceiptEuro({ size, width, height, ...props }: IconProps) {
  warnMissingIconSize("ReceiptEuro", size, width, height);
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
  return  renderUse("receipt-euro", width, height, size, SPRITE_PATH, props)
}
