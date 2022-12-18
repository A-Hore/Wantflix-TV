import { Box } from "@chakra-ui/react";
import { comingSoon } from "../Data/Data";
import { CardCarousel } from "./CardCarousel";




function Homec() {
  return (
    <Box  mt={4}>

      <CardCarousel
        data={comingSoon}
        title={"Upcomming Movies: Watch Free This Weekend"}
        minititle={"A London couple wants to start a family in this heartfelt movie."}
      />

    </Box>
  );
}

export default Homec;