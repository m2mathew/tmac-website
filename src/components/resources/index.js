// External Dependencies
import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

// Local Variables
const ResourcesTitle = styled.h3`
  display: inline-block;
  border-bottom: solid 1px;
`;

const ResourcesWrapper = styled.div`
  display: flex;
`;

// Component Definition
export default () =>
  <div>
    <ResourcesTitle>
      Resources
    </ResourcesTitle>
    <ResourcesWrapper>
      Resources data
    </ResourcesWrapper>
  </div>
