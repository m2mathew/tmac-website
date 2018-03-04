// External Dependencies
import React from 'react';
import Link from 'gatsby-link';

// Internal Dependencies
import presets, { colors } from '../../utils/presets';
import typography, { rhythm, scale, options } from '../../utils/typography';

// Icons
import aboutIcon from 'react-icons/lib/md/info-outline';
import membersIcon from 'react-icons/lib/md/person-outline';
import resourcesIcon from 'react-icons/lib/md/folder-open';
import sponsorsIcon from 'react-icons/lib/md/card-giftcard';

// Local Variables
const texasFlagBlue = '#002868';

// Component Definition
const MobileNavItem = ({ linkTo, label, icon: Icon }) => (
  <Link
    to={linkTo}
    css={{
      color: colors.gray.dark,
      fontSize: scale(-1 / 2).fontSize,
      letterSpacing: `0.0075rem`,
      lineHeight: 1,
      padding: `${rhythm(options.blockMarginBottom / 4)} ${rhythm(
        options.blockMarginBottom
      )} ${rhythm(options.blockMarginBottom / 2)} `,
      textDecoration: `none`,
      textAlign: `center`,
    }}
  >
    <div
      css={{
        display: `block`,
        margin: `0 auto`,
      }}
    >
      <Icon
        fill={texasFlagBlue}
        height="32px"
        width="32px"
      />
    </div>
    <div
      css={{
        marginTop: 8,
      }}
    >{label}</div>
  </Link>
);

export default () => (
  <div
    css={{
      position: `fixed`,
      display: `flex`,
      justifyContent: `space-around`,
      alignItems: `center`,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      borderTop: `1px solid ${colors.ui.light}`,
      background: colors.ui.whisper,
      fontFamily: typography.options.headerFontFamily.join(`,`),
      [presets.Tablet]: {
        display: `none`,
      },
    }}
  >
    <MobileNavItem
      linkTo="/about/"
      label="About"
      icon={aboutIcon}
    />
    <MobileNavItem
      linkTo="/resources/"
      label="Resources"
      icon={resourcesIcon}
    />
    <MobileNavItem
      linkTo="/members/"
      label="Members"
      icon={membersIcon}
    />
    <MobileNavItem
      linkTo="/sponsors/"
      label="Sponsors"
      icon={sponsorsIcon}
    />
  </div>
);
