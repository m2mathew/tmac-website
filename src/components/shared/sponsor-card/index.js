// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { css } from 'glamor';

// Local Variables
const sponsorInfoStyles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
};

// Component Definition
class SponsorCard extends Component {
  static propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    sponsorClass: PropTypes.string.isRequired,
    sponsorData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  static defaultProps = {
    max: null,
    min: null,
  };

  renderSponsors = sponsorData => sponsorData.map(sponsor => (
    <div
      key={sponsor.name}
      css={{ fontSize: 19, marginBottom: 6 }}
    >
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {sponsor.name}
      </a>
    </div>
  ));

  render() {
    const {
      max,
      min,
      sponsorClass,
      sponsorData,
    } = this.props;

    const donationAmount = min
      ? `${min.toLocaleString()}-${max.toLocaleString()}`
      : `${max.toLocaleString()}+`;

    // Let's add some animation to the titles of the sponsor levels!
    const textShadowDropBottom = css.keyframes({
      '0%': { textShadow: '0 0 0 rgba(0, 0, 0, 0)' },
      // '15%': { transform: 'translateX(-20px) rotate(-5deg)' },
      // '30%': { transform: 'translateX(15px) rotate(5deg)' },
      // '45%': { transform: 'translateX(-15px) rotate(-3.6deg)' },
      // '60%': { transform: 'translateX(9px) rotate(2.4deg)' },
      // '75%': { transform: 'translateX(-6px) rotate(-1.2deg)' },
      '100%': { textShadow: '0 4px 3px rgba(0, 0, 0, 0.2)' },
    });

    // @keyframes text-shadow-drop-bottom {
    //   0% {
    //     text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    //   }
    //   100% {
    //     text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
    //   }
    // }

    return (
      <div
        css={{
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: 'rgba(25, 17, 34, 0.05) 0px 3px 10px',
          // display: 'flex',
          // flexDirection: 'column',
          marginBottom: '1em',
          padding: '2em 3em',
        }}
      >
        <h2
          css={css({
            animation: `${textShadowDropBottom} 2s both`,
          })}
        >
          {sponsorClass}
        </h2>
        <h4
          css={{
            color: '#32456B',
            marginTop: '1.25rem',
          }}
        >
          (${donationAmount} donation)
        </h4>

        {this.renderSponsors(sponsorData)}

        <hr css={{ color: 'blue', height: 3, marginTop: 32 }} />

        <div css={sponsorInfoStyles}>
          <h4 css={{ color: '#32456B', marginTop: 12 }}>Sponsorship receives:</h4>
          <ul css={{ maxWidth: '60%', textAlign: 'justify' }}>
            {sponsorClass === 'Class Champion' && <li>Up to 20 min presentation to TMAC membership at either Nov Conference or TMEA Meeting</li>}
            <li>Company Logo in TMAC November Conference and February Meeting Program</li>
            <li>Company Logo on TMAC website</li>
          </ul>
            Deadline to register and pay is Nov 1
          <Link
            css={{
              fontSize: 20,
              fontWeight: '600',
              margin: '24px 0',
            }}
            to="/sponsors/sponsor-info"
            state={{ level: sponsorClass }}
          >
            Click here to register and pay
          </Link>
        </div>
      </div>
    );
  }
}

export default SponsorCard;
