import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/general';
import Main from '../components/layout/main';
import Details from '../components/pages/details';
import Cta from '../components/pages/cta';
import Flexbox from '../components/blocks/flexbox';
import Next from '../components/pages/next';

let page = {};
page.title = "IT solutions for organisations that wants things more organized.";
page.description = "For the past 5 years, Willparry Worldwide, a global agency based in nigeria, has helped hospitals, churches and organizations to run more efficiently using IT solutions and softwares customized for their needs.";

export default function Home() {
  return (

    <Layout>

      <Main>
        
        <Details title={page.title} content={page.description} />

        <Flexbox>
          <Cta button="Contact us" second_link="Read more about us"/>
          <Next />
        </Flexbox>

      </Main>
      

     </Layout>

  );
}