// External Dependencies
import React from 'react';

// Internal Dependencies
import presets from '../../utils/presets';
import { options } from '../../utils/typography';
import { currentYearLong } from '../../utils/helpers';

// Component Definition
export default () => (
  <footer
    className="main-body"
    css={{
      alignItems: 'center',
      background: '#fbfafc',
      borderTop: '4px solid #2D456F',
      bottom: 68,
      boxShadow: '-2px 0 5px #444',
      boxSizing: 'border-box',
      display: 'flex',
      flex: 1,
      fontFamily: options.headerFontFamily.join('/'),
      fontSize: 12,
      justifyContent: 'space-between',
      padding: '1.25em',
      position: 'relative',
      zIndex: 10,
      [presets.Tablet]: {
        fontSize: 16,
        padding: '2em',
        position: 'static',
      },
    }}
  >
    <div
      css={{
        maxWidth: '60%',
      }}
    >
      &copy; 2016-{currentYearLong} |
      <a css={{ marginLeft: 5 }} href="https://www.texasmusicadmin.com/">
        Texas Music Administrators Conference
      </a>
    </div>
    <div
      css={{
        textAlign: 'right',
      }}
    >
      <div>
        Built by
        <a css={{ marginLeft: 5 }} href="http://www.drumsensei.com">
          Drumsensei Media
        </a>
      </div>
    </div>
  </footer>
);
