// template: streamline-outline-2px
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const SvgBin = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx, padding: "2px" }}
      {...other}
    >
      <defs>
        <style>
          {
            ".bin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
          }
        </style>
      </defs>
      <path
        className="bin_svg__a"
        d="M17.25 21H6.75a1.5 1.5 0 0 1-1.5-1.5V6h13.5v13.5a1.5 1.5 0 0 1-1.5 1.5ZM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6h7.5V4.5a1.5 1.5 0 0 0-1.5-1.5Z"
      />
    </SvgIcon>
  );
};

const Memo = memo(SvgBin);
export default Memo;
