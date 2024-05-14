---
sidebar_position: 2
---
## rfc

```json
{
	"NextPage use client": {
		"scope": "javascript,javascriptreact,typescript,typescriptreact",
		"prefix": "rfcuse", // 触发片段的快捷键
		"body": [
            "'use client'",
			"",
			"export default function ${1}${TM_FILENAME_BASE}() {",
			"   return (",
			"     <>",
            "     ${1:${TM_FILENAME_BASE}}",
            "     </>",
			"   )",
			"}",

		]
	},

	"Next Layout": {
		"scope": "javascript,javascriptreact,typescript,typescriptreact",
		"prefix": "rfclayout", // 触发片段的快捷键
		"body": [
			"",
			"export const metadata = {",
			"title: { absolute: '${1}', },",
			"}",
			"",
			"export default function ${1}${TM_FILENAME_BASE}({children}) {",
			"   return (",
			"     <>",
            "     {children}",
            "     </>",
			"   )",
			"}",

		]
	},

	"use client": {
		"scope": "javascript,javascriptreact,typescript,typescriptreact",
		"prefix": "useclient", // 触发片段的快捷键
		"body": [
			"'use client'",

		]
	},

}
```