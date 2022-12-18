import { Spinner, Stack } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Spinner size="xl" />
    </Stack>
  );
};

export default Loading;
