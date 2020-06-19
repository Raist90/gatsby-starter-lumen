// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Pagina non trovata">
        <p>La pagina che stai cercando di raggiungere non esiste più, o è stata rimossa. Usa il menu per trovare quello che stai cercando.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
