import React from 'react';

import Page from 'components/Page';

const TitlePage = () => {
    return (
        <Page title="Title" breadcrumbs={[{ name: 'title', active: true }]}>
            This is a Title Page
        </Page>
    )
}

export default TitlePage;