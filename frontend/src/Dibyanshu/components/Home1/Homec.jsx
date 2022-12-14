

import { Box } from "@chakra-ui/react";
import { CardCarousel } from "../Caraousel/CardCaraousel";
import { comingSoon } from "../Data/Data";

function Homec() {
  return (
    <Box top="30px" mt={70}>
    
      <CardCarousel
        data={comingSoon}
        title={"Trying: Watch Season 1 Free Through This Weekend"}
        minititle={"A London couple wants to start a family in this heartfelt comedy."}
      />
     
    </Box>
  );
}

export default Homec;
