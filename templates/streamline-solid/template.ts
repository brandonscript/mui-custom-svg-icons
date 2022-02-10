function muiSolidTemplate(variables, { tpl }) {
  
  // Change the svg container to MUI's SvgIcon
  variables.jsx.openingElement.name.name = "SvgIcon";
  variables.jsx.closingElement.name.name = "SvgIcon";

  // Add preserveAspectRatio="xMidYMid meet" to the svg container
  variables.jsx.openingElement.attributes.push({
    type: "JSXAttribute",
    name: { type: "JSXIdentifier", name: "preserveAspectRatio" },
    value: { type: "StringLiteral", value: "xMidYMid meet" },
  });

  // Append sx={{ ...sx, padding: '2px' }} to the JSXOpeningElement's attributes
  variables.jsx.openingElement.attributes.push({
    type: "JSXAttribute",
    name: { type: "JSXIdentifier", name: "sx" },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "ObjectExpression",
        properties: [
          {
            type: "SpreadElement",
            argument: {
              type: "Identifier",
              name: "sx",
            },
          },
          {
            type: "ObjectProperty",
            key: { type: "Identifier", name: "padding" },
            value: { type: "StringLiteral", value: "2px" },
          },
        ],
      },
    },
  });

  // Append a {...other} to the opening element's attributes
  variables.jsx.openingElement.attributes.push({
    type: "JSXSpreadAttribute",
    argument: {
      type: "Identifier",
      name: "other",
    },
  });

  return tpl`
// template: streamline-solid
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";
const ${variables.componentName} = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    ${variables.jsx}
  );
};
 
${variables.exports};
`;
}

module.exports = muiSolidTemplate;