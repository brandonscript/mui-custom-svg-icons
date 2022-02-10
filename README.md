# mui-custom-svg-icons
An icon generator for SVG icons (built on [@SVGR](https://react-svgr.com)) specifically designed to generate [MUI](https://mui.com) icons as React components.

While this was primarily intended to work with [Streamline Icons](https://streamlinehq.com), it should work with any icon set – albeit you may want to adjust the template's padding.

# Installation & dependencies
In order for this package to work, you must have `Node` v17 and `npm` 8.4 running. Other versions fail and I'll figure out how to fix them later.

1. Clone the repo

2. `yarn install`

# Usage
1. Add your icons to `/icons`

2. `yarn build`

3. Drop the `/dist` folder into your MUI project (maybe rename it to `/icons` or something sensible) and 
   ```
   import { IconName } from "./icons/"
   ```
