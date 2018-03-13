// External Dependencies
import Helmet from 'react-helmet';
import React, { Component } from 'react';

// Internal Dependencies
import CardHeadline from '../../components/shared/cards/card-headline';
import Container from '../../components/shared/container';
import FuturaParagraph from '../../components/shared/futura-paragraph';
import { outstandingAdmin } from './resources-constants';

// Local Variables

// Component Definition
class ChronologicalAdmin extends Component {
  renderTableRows = () =>
    outstandingAdmin.map(a => (
      <tr>
        <th>{a.year}</th>
        <th>{a.name}</th>
      </tr>
    ))

  render() {
    return (
      <div>
        <Helmet>
          <title>TMAC | Outstanding Administrators</title>
        </Helmet>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <Container>
            <CardHeadline>Chronological Listing</CardHeadline>

            <FuturaParagraph>
              Chronological listing of all TMAC Outstanding Administrator Award Recipients
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTableRows()}
                </tbody>
              </table>
            </FuturaParagraph>

          </Container>
        </div>
      </div>
    );
  }
}

export default ChronologicalAdmin;