import { Box, Container, Typography, styled } from "@mui/material";

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(6)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: "block", md: "flex" }}
        alignItems="center"
        textAlign={{ xs: "center", md: "left" }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1" color="primary">
            &copy; 2024 React Typescript Dashboard
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 },
          }}
          variant="subtitle1"
        >
          Crafted by Techno Magics
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
