import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LandingPageLayout from "components/layout/LandingPageLayout";
import Logo from "assets/images/logo/Netaku Logo.png"

function LandingPage() {

    return (
        <LandingPageLayout>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                minHeight={"100vh"}
                flexDirection={"column"}
                className="bg-slate-100"
            >  
                <img src={Logo} alt="logo" className="max-w-[500px]" />
                <Typography variant="h3">
                    Work in Progress
                </Typography>
            </Box>
        </LandingPageLayout>
    )
}

export default LandingPage;
