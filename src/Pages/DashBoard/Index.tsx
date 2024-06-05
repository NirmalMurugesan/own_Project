// import { Box } from "@mui/material";
import PageHeader from "./PageHeader/PageHeader";
import {
  Container,
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Data from "../../Data/Data";
import Footer from "../../Components/Footer/Footer";

import "./style.sass";
import { useNavigate } from "react-router-dom";

function ContentPage() {
  const navigate = useNavigate();
  const handledetails = (i: any, item: any) => {
    console.log("working as perfect", i);
    navigate(`/popover/${item.category}/${item.id}`, {state: item})
  };

  return (
    <>
      <Box>
        {/* <PageTitleWrapper> */}
        <PageHeader />
        {/* </PageTitleWrapper> */}
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            {Data.map((item, index) => {
              return (
                <Grid xs={12} sm={6} md={3} item>
                  <Card
                    sx={{
                      px: 1,
                    }}
                    key={index}
                    // style={{ cursor: "pointer" }}
                    className="cardEvents"
                    onClick={() => handledetails(index, item)}
                    // cursor="pointer"
                  >
                    {/* <Link to={`/popover/${item.category}/${index}`}> */}
                      <CardContent>
                        <Typography variant="h5" noWrap color="primary">
                          {item.category}
                        </Typography>
                        <Grid
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="subtitle1">
                            {item.sellerInfo.name}
                          </Typography>
                          <Typography>{item.price}</Typography>
                        </Grid>

                        <Box
                          sx={{
                            pt: 3,
                          }}
                        >
                          <CardMedia
                            sx={{
                              height: 145,
                            }}
                            image={item.Imgs.img_1}
                          />
                        </Box>
                      </CardContent>
                    {/* </Link> */}
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default ContentPage;
