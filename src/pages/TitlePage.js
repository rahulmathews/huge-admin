import React from 'react';

import Page from 'components/Page';

const TitlePage = () => {
    return (
        <Page title="Title" breadcrumbs={[{ name: 'title', active: true }]}>

        </Page>
    )
}

export default TitlePage;