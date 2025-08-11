import React, { lazy, Suspense, type SVGProps } from "react";
import { SPRITE_PATH } from "../config";
import { renderUse } from "../_shared";

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: string;
	size?: number | string;
}

// Dev-only client renderer. In production this becomes `null` and is tree-shaken.
const DevIcon = process.env.NODE_ENV === "development" ? (lazy(() => import("../_custom-dev-icon")) as React.ComponentType<IconProps>) : null;

export function CustomIcon(props: IconProps) {
	if (process.env.NODE_ENV === "development" && DevIcon) {
		// Local fallback renders the sprite immediately while the lazy chunk loads.
		const { name, size, width, height, ...rest } = props;
		const fallback = renderUse(name, width, height, size, SPRITE_PATH, rest);
		return (
			<Suspense fallback={fallback}>
				<DevIcon {...props} />
			</Suspense>
		);
	}

	// Production: pure sprite (no dev chunk in the bundle)
	const { name, size, width, height, ...rest } = props;
	return renderUse(name, width, height, size, SPRITE_PATH, rest);
}

export default CustomIcon;
