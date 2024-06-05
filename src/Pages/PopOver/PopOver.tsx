import { Box, Card, CardHeader, Divider, Grid, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import ImageLists from "./ImageList/ImageList";

export default function PopOver() {
  const location = useLocation();
  // console.log(location.state);

  return (
    <Container fixed>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", padding: "40px" }}>
        <Card>
          {/* <Divider /> */}
          <Box p={2}>
              <ImageLists locationData={location} />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
