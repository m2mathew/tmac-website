// External Dependencies
import React from 'react';

// Internal Dependencies
import { rhythm, scale, options } from '../../../utils/typography';

// Component Definition
const Cards = ({ children }) => (
  <div
    css={{
      display: `flex`,
      flex: `0 1 auto`,
      flexWrap: `wrap`,
      background: `#fff`,
      boxShadow: `0 5px 20px rgba(25, 17, 34, 0.1)`,
      transform: `translateZ(0)`,
    }}
  >
    {children}
  </div>
)

export default Cards
