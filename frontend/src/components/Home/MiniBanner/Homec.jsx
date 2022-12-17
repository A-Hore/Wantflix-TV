import { Box } from "@chakra-ui/react";
import { CardCarousel } from "./CardCarousel";

import { comingSoon } from "./Data";


function Homec() {
  return (
    <Box top="5px" mt={6}>

      <CardCarousel
        data={comingSoon}
        title={"Upcomming Movies: Watch Free This Weekend"}
        minititle={"A London couple wants to start a family in this heartfelt movie."}
      />

    </Box>
  );
}

export default Homec;