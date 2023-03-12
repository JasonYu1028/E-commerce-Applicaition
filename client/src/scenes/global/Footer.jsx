import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            LONG ZHAO
          </Typography>
          <div>
          LONG ZHAO is a trading company in Hainan China. We established longer and closer working relationships with our clients and suppliers not only to provide immediate and reliable services but to continually exceed expectations and goals.
          </div>
          <div>
          We create commercial flows, import and export products, arranging and manage international projects with our partners. Supported by our network, we are able to integrate all these functions with our fruitful experience. Our numerous competencies allow us to respond to the needs of industries looking for a new market. We look forward to welcoming you to our company with the highest level of shopping experience and best customer service. 
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          
          <Typography mb="30px">
          Zijing Road, Jinmao Street, Longhua District, Haikou City, Hainan Province, China
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: yuri@hnlzkj.cn 
          </Typography>
          <Typography mb="30px">(226)581-1318</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
