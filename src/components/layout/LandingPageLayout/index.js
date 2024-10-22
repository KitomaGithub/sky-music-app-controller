import PageLayout from "../../base/PageLayout";

import PropTypes from "prop-types"

function LandingPageLayout({children}){

    return (
        <PageLayout>
            {children}
         </PageLayout>
    )
}

LandingPageLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LandingPageLayout;