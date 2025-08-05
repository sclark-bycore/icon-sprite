// src/components/CustomIcon.tsx
import { readFileSync } from "fs";
import path from "path";
import type { SVGProps } from "react";
import { parseFragment, type ChildNode } from "parse5";
import { CUSTOM_SVG_DIR, SPRITE_PATH } from "../config";

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: string;
	size?: number | string;
}

const kebabToCamel = (s: string) => s.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

function serializeNode(node: any): string {
	if (node.nodeName === "#text") return node.value;
	if (!node.tagName) return "";

	const attrs = node.attrs?.map((a: { name: string; value: string }) => `${a.name}="${a.value}"`).join(" ");

	const open = `<${node.tagName}${attrs ? " " + attrs : ""}>`;
	const children = (node.childNodes ?? []).map(serializeNode).join("");
	const close = `</${node.tagName}>`;

	return open + children + close;
}

export function extractSVGContent(svgString: string) {
	const frag = parseFragment(svgString);
	const svgNode = frag.childNodes.find((n) => n.nodeName === "svg") as ChildNode;

	if (!svgNode) {
		throw new Error("SVG tag missing or malformed.");
	}

	// Get attributes (skip width/height)
	const attrs: Record<string, string> = {};
	for (const attr of (svgNode as { attrs?: Array<{ name: string; value: string }> }).attrs ?? []) {
		if (!/^(width|height)$/i.test(attr.name)) {
			attrs[kebabToCamel(attr.name) as keyof SVGSVGElement] = attr.value;
		}
	}

	// Use serialize on childNodes directly
	const innerHTML = (svgNode as { childNodes: ChildNode[] }).childNodes
		.map((n: ChildNode) => {
			return serializeNode(n);
		})
		.join("")
		.trim();

	if (!innerHTML) {
		throw new Error("⚠️ No inner content found in the SVG.");
	}

	return { attrs, innerHTML };
}

export function CustomIcon({ name, size, ...rest }: IconProps) {
	if (process.env.NODE_ENV === "development") {
		const file = path.join(process.cwd(), "public", CUSTOM_SVG_DIR, `${name}.svg`);
		let raw = "";

		try {
			raw = readFileSync(file, "utf8");
		} catch {
			throw new Error(`Cannot read dev SVG: ${file}`);
		}

		const { attrs, innerHTML } = extractSVGContent(raw);

		return (
			<svg
				{...attrs}
				{...(size != null ? { width: size, height: size } : {})}
				{...rest}
				dangerouslySetInnerHTML={{ __html: innerHTML }}
			/>
		);
	}

	return (
		<svg
			{...(size != null ? { width: size, height: size } : {})}
			{...rest}
		>
			<use href={`${SPRITE_PATH}#${name}`} />
		</svg>
	);
}
