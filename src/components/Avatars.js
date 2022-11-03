import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Hollys from "../images/hollys.jpg";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={Hollys} />

      <Avatar alt="Travis Howard" src={Hollys} />
      <Avatar alt="Cindy Baker" src={Hollys} />
    </Stack>
  );
}
