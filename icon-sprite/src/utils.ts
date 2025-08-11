// config.js (or utils.js)

// track which icons we've already warned for
const __warnedIcons = ((globalThis as any).__rzui_icon_warned ??= new Set());

/**
 * Warns devs if an icon is missing both:
 * - `size` prop
 * - OR both `width` and `height`
 */
export function warnMissingIconSize(name: string, size: number | string | undefined, width: number | string | undefined, height: number | string | undefined) {
	if (process.env.NODE_ENV === "production") return;

	const missingAll = size == null && (width == null || height == null);
	if (missingAll && !__warnedIcons.has(name)) {
		__warnedIcons.add(name);
		console.warn(
			`[icon-sprite] ⚠️ <${name}/> was rendered without 'size' or both 'width' and 'height'. ` +
				`\nThis will VERY LIKELY result in different visual sizes between dev and prod. ` +
				`\nPass 'size', or both 'width' and 'height', to ensure consistent rendering.`
		);
	}
}
