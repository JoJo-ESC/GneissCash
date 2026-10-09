# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Money Map colors

Node and link colors in the money map (`src/lib/moneyMap.ts`, `getNodeColor`)
are meaningful, not decorative — each one encodes what kind of node it is:

| Node | Color | Why |
|---|---|---|
| Account | Dark graphite (`#3a3a3c`) | The structural "hub" of the graph — deliberately neutral so it doesn't compete with the category hues flowing out of it. |
| Income source | Green (`#0ca30c`) | Reserved status color for "money in," distinct from every category hue below. |
| Category — Food & Drink | Orange (`#eb6834`) | One of 3 "hero" categories with a dedicated hue. |
| Category — Transportation | Blue (`#2a78d6`) | Hero category. |
| Category — Bills & Utilities | Violet (`#4a3aa7`) | Hero category. |
| Category — everything else | Graduated neutral grays | Shopping, Entertainment, Health, Travel, Transfer, Other/Uncategorized — see below for why they don't get their own hues. |
| Merchant | Inherits its parent category's color | Expanding a category shows a family of same-colored merchants, reinforcing the hierarchy instead of relying on position alone. |
| Link | Colored by its **target** node | You see money visually "flow into" a color, e.g. a link into Food & Drink renders orange. |

### Why only 3 categories get real hues

The money map is a force-directed graph, so any two category nodes can end
up adjacent on screen — that makes it an "all-pairs" color context (same
category as a bubble chart or scatter plot), which is a much stricter bar
than a bar chart or line chart where only *neighboring* series need to be
distinguishable. Categorical colors here were chosen and validated with the
`dataviz` skill's colorblind-safety checker
(`node scripts/validate_palette.js "<hex,hex,…>" --pairs all`), which
simulates protanopia/deuteranopia/tritanopia and checks OKLab color distance.

7 initially-chosen hues **failed** validation — several pairs (e.g. orange vs.
red) were too close for colorblind readers to reliably tell apart. Only 3 of
the palette's documented hues (blue, orange, violet) pass the all-pairs check
together; every other category was moved to a neutral gray ramp instead of
a competing hue, rather than shipping a palette that fails real color-vision
testing.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
