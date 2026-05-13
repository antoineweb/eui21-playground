# eui21-playground

A live source-of-truth playground for [EUI 21](https://eui.ecdevops.eu/eui-showcase-ux-components-21.x) components, built with Angular 21. Useful as a visual reference when building sub design systems around specific features.

## Tabs

- **Button** — every variant of `<button euiButton>` (colors, sizes, outline, CTA, block, compact, icon-only, checked/disabled states, alignment, element types).
- **Slide toggle** — `<eui-slide-toggle>` variants (default, on, disabled, icons, all colors, all sizes).

Each page imports the matching `EUI_*` export array from `@eui/components/*` and uses `ChangeDetectionStrategy.OnPush`.

## Run it

```bash
npm install --legacy-peer-deps
npm start
# → http://localhost:4200
```

## Setup gotchas

These caught us during scaffolding — keep them in mind when adding more components or starting another EUI 21 project from scratch.

1. **`.eui-21` ancestor class is required.** Every component's inline styles are scoped under `.eui-21 :host…`. Without that class on a parent (we put it on `<body>` in [`src/index.html`](src/index.html)), components render as bare HTML.
2. **Animations provider.** EUI components use Angular animations; [`src/app/app.config.ts`](src/app/app.config.ts) registers `provideAnimations()`.
3. **Undeclared transitive deps.** `@eui/components` doesn't declare `@angular/animations`, `deepmerge-ts`, or `reselect` as peers — install them explicitly.
4. **moment-timezone pin.** Peer wants `^0.5.45`; latest is `0.6.x`. Pin to `^0.5.45` and install with `--legacy-peer-deps`.
5. **Component CSS isn't in `@eui/styles`.** It's bundled inside the component `.mjs`. The CSS files from `@eui/styles/dist/` only provide tokens (`--eui-c-*`, `--eui-s-*`, …) and base resets — both `eui-base.css` and `eui.css` are wired in [`angular.json`](angular.json).
6. **No `isCheckedChange` on `<eui-slide-toggle>`.** The docstring shows `[(isChecked)]` but there's no two-way output — use `[isChecked]` + `(slideToggleChange)`, or `formControlName` with reactive forms.
7. **Per-component style budget.** EUI's inline styles exceed the default `anyComponentStyle` budget; [`angular.json`](angular.json) raises it to 20 kB/40 kB.

## Project layout

```
src/app/
├── app.{ts,html,scss}              tab shell
├── default/                         <eui-slide-toggle> reference
│   ├── default.component.ts
│   └── component.html
└── button-showcase/                 <button euiButton> reference
    ├── button-showcase.component.ts
    ├── component.html
    └── component.scss
```
