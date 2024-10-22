import { Box } from "@mui/system";

import PropTypes from "prop-types";

function PageLayout({children}) {
    return (
        <Box
            width="100vw"
            height="100%"
            minHeight="100svh"
            sx={{ overflowX: "hidden" }}
        >
            {children}
        </Box>
    )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageLayout;
