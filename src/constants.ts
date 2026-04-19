import { SlashCompleteSettings } from "./models/slash_complete_settings";

export const DEFAULT_SETTINGS: SlashCompleteSettings = {
	hotKey: `/`,
	// 🔥 核心修改：把原【对象格式】改成【数组格式】（支持拖拽排序/新增/编辑）
	commands: [
		{ id: 1, command: "h1", alias: null, value: "# " },
		{ id: 2, command: "h2", alias: null, value: "## " },
		{ id: 3, command: "h3", alias: null, value: "### " },
		{ id: 4, command: "h4", alias: null, value: "#### " },
		{ id: 5, command: "h5", alias: null, value: "##### " },
		{ id: 6, command: "h6", alias: null, value: "###### " },
		{ id: 7, command: "bold", alias: null, value: "____" },
		{ id: 8, command: "italics", alias: null, value: "__" },
		{ id: 9, command: "strike-through", alias: null, value: "~~~~" },
		{ id: 10, command: "subscript", alias: null, value: "<sub></sub>" },
		{ id: 11, command: "super", alias: null, value: "____" },
		{ id: 12, command: "underline", alias: null, value: "<ins></ins>" },
		{ id: 13, command: "highlight", alias: null, value: "====" },
		{ id: 14, command: "quote", alias: null, value: ">" },
		{ id: 15, command: "link", alias: null, value: "[]()" },
		{ id: 16, command: "image", alias: "img", value: "![]()" },
		{ id: 17, command: "newline", alias: "br", value: "<br />" },
		{ id: 18, command: "bullet-list", alias: "li", value: "- " },
		{ id: 19, command: "number-list", alias: "ol", value: "1. " },
		{ id: 20, command: "checkbox", alias: "cb", value: "- [ ] " },
		{ id: 21, command: "code", alias: null, value: "```" },
		{ id: 22, command: "info", alias: null, value: ">[!INFO]\n>" },
		{ id: 23, command: "tip", alias: null, value: ">[!TIP]\n>" },
		{ id: 24, command: "important", alias: null, value: ">[!IMPORTANT]\n>" },
		{ id: 25, command: "warning", alias: null, value: ">[!WARNING]\n>" },
		{ id: 26, command: "caution", alias: null, value: ">[!CAUTION]\n>" },
		{ id: 27, command: "table", alias: "tb", value: `| | | |
|---|---|---|
| | | |
| | | |` },
	],
};
