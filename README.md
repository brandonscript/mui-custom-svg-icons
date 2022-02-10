# mui-custom-svg-icons
An icon generator for SVG icons (built on [@SVGR](https://react-svgr.com)) specifically designed to generate [MUI](https://mui.com) icons as React components.

While this was primarily intended to work with [Streamline Icons](https://streamlinehq.com), it should work with any icon set – albeit you may want to adjust the template's padding.

# Installation & dependencies
In order for this package to work, you must have `Node` v17 and `npm` 8.4 running. Other versions fail and I'll figure out how to fix them later.

1. Clone the repo

2. `yarn install`

# Usage
1. Add your svg icons to `/icons` or `/icons/<some-folder>`

2. Use the sample templates in `/templates` or make your own

3. Add or edit the name of your template(s) in scripts under `package.json`

4. `yarn make:<your-icon-template>`

5. Icons will be generated in `/dist` with an index.ts – add these to a sensibly named folder in your project (`/icons`?) then:
   ```
   import { IconName } from "./icons/"
   ```
