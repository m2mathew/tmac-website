// External Dependencies
import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// Internal Dependencies
import SponsorCard from '../shared/sponsor-card';
import sponsorData from './sponsor-data';

// Component Definition
export default () =>
  <section
    css={{
      textAlign: 'center',
    }}
  >
    <Helmet>
      <title>TMAC | Sponsors</title>
    </Helmet>
    <h3
      css={{
        display: 'inline-block',
        borderBottom: 'solid 1px',
      }}
    >
      Sponsors
    </h3>
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SponsorCard
        max={2000}
        sponsorClass="Class Champion"
        sponsorData={sponsorData.champion}
      />
      <SponsorCard
        min={1500}
        max={1999}
        sponsorClass="Gold Medal"
        sponsorData={sponsorData.gold}
      />
      <SponsorCard
        min={1000}
        max={1499}
        sponsorClass="Silver Medal"
        sponsorData={sponsorData.silver}
      />
      <SponsorCard
        min={500}
        max={999}
        sponsorClass="Bronze Medal"
        sponsorData={sponsorData.bronze}
      />
    </div>
  </section>
