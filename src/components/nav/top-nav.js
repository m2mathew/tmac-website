// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import hex2rgba from 'hex2rgba';
import { Link } from 'gatsby';

// Internal Dependencies
import AuthUserContext from '../session/AuthUserContext';
import presets from '../../utils/presets';
import { auth } from '../../firebase';
import { rhythm, scale, options } from '../../utils/typography';

// Local Variables
const navItemStyles = {
  ...scale(-1 / 3),
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'inline-block',
  letterSpacing: '0.03em',
  lineHeight: `calc(${presets.headerHeight} - 6px)`,
  padding: `6px ${rhythm(1 / 2)} 0`,
  position: 'relative',
  textDecoration: 'none',
  textTransform: 'uppercase',
  top: 0,
  transition: 'color .15s ease-out',
  '&:hover': {
    opacity: 0.8,
    textDecoration: 'underline',
  },
  active: {
    fontWeight: 600,
  },
};

const NavItem = ({ linkTo, children }) => (
  <li
    css={{
      display: 'inline-block',
      margin: 0,
    }}
  >
    <Link
      css={navItemStyles}
      getProps={({ isPartiallyCurrent }) =>
        (isPartiallyCurrent && children !== 'TMAC' && children !== 'Sign Out'
          ? { style: navItemStyles.active }
          : {})}
      to={linkTo}
    >
      {children}
    </Link>
  </li>
);
NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]).isRequired,
  linkTo: PropTypes.string.isRequired,
};

// Component Definition
const TopNav = ({ isAuthenticated }) => {
  const handlePressKeyDown = (event) => {
    if (['Enter', ' '].includes(event.key)) {
      auth.doSignOut();
    }
  };

  return (
    <div
      role="navigation"
      css={{
        background: `${hex2rgba('#fbfafc', 0.95)}`,
        display: 'flex',
        flex: 1,
        height: presets.headerHeight,
        left: 0,
        right: 0,
        zIndex: '2',
        [presets.Tablet]: {
          position: 'fixed',
        },
      }}
    >
      <div
        css={{
          alignItems: 'flex-end',
          borderBottom: '4px solid #2D456F',
          boxShadow: '3px 0 5px #2D456F',
          boxSizing: 'border-box',
          display: 'flex',
          fontFamily: options.headerFontFamily.join(','),
          height: '100%',
          margin: '0 auto',
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          width: '100%',
        }}
      >
        <NavItem
          css={{
            '&:hover': {
              opacity: 1,
              textDecoration: 'none',
            },
          }}
          linkTo="/"
        >
          <div
            css={{
              alignItems: 'center',
              color: 'inherit',
              display: 'flex',
              marginRight: rhythm(1 / 2),
              textDecoration: 'none',
            }}
          >
            <img
              alt="TMAC logo"
              height="30px"
              src="https://res.cloudinary.com/tmac/image/upload/v1523131020/tmac-logo.jpg"
              style={{ marginBottom: 0 }}
            />
            <div
              css={{
                fontSize: 24,
                marginLeft: '0.8em',
                textDecoration: 'none',
              }}
            >
              TMAC
            </div>
          </div>
        </NavItem>
        <ul
          css={{
            display: 'none',
            [presets.Tablet]: {
              display: 'flex',
              flexGrow: 1,
              listStyle: 'none',
              margin: 0,
              maskImage: `linear-gradient(to right, transparent, white ${rhythm(
                1 / 8,
              )}, white 98%, transparent)`,
              overflowX: 'auto',
              padding: 0,
            },
          }}
        >
          <NavItem linkTo="/about/">About</NavItem>
          <NavItem linkTo="/events/">Events</NavItem>
          <NavItem linkTo="/resources/">Resources</NavItem>
          <NavItem linkTo="/members/">Membership</NavItem>
          <NavItem linkTo="/sponsors/">Sponsors</NavItem>
          {isAuthenticated && (
            <div
              css={{
                float: 'right',
              }}
              onClick={auth.doSignOut}
              onKeyDown={handlePressKeyDown}
              role="button"
              tabIndex={0}
            >
              <NavItem linkTo="/">Sign Out</NavItem>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
TopNav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const TopNavWithContext = (props) => (
  <AuthUserContext.Consumer>
    {(authUser) => <TopNav {...props} isAuthenticated={!!authUser} />}
  </AuthUserContext.Consumer>
);

export default TopNavWithContext;
