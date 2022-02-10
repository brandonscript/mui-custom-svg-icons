// template: streamline-solid
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const SvgBin1 = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx, padding: "2px" }}
      {...other}
    >
      <path d="M19.452 7.5H4.547a.5.5 0 0 0-.5.545l1.287 14.136A2 2 0 0 0 7.326 24h9.347a2 2 0 0 0 1.992-1.819L19.95 8.045a.5.5 0 0 0-.129-.382.5.5 0 0 0-.369-.163Zm-9.2 13a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0Zm5 0a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0ZM22 4h-4.75a.25.25 0 0 1-.25-.25V2.5A2.5 2.5 0 0 0 14.5 0h-5A2.5 2.5 0 0 0 7 2.5v1.25a.25.25 0 0 1-.25.25H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2ZM9 3.75V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.25a.25.25 0 0 1-.25.25h-5.5A.25.25 0 0 1 9 3.75Z" />
    </SvgIcon>
  );
};

const Memo = memo(SvgBin1);
export default Memo;
