// External Dependencies
import {
  Box,
  CircularProgress,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';

// Internal Dependencies
import EnhancedAlert from '../../components/shared/EnhancedAlert';
import Cards from '../../components/shared/cards';
import presets from '../../utils/presets';
import { ADMIN_USER_EMAIL_LIST } from '../../utils/member-constants';

// Local Dependencies
import MemberFileShareCard from './MemberFileShareCard';
import MemberInfo from './member-info';
import MemberTasks from './member-tasks';

// Sidebar Data
import membersSidebar from './members-links.yml';
import SidebarBody from '../../components/shared/sidebar/SidebarBody';

// Local Variables
const propTypes = {
  authUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
  contentfulFileShareData: PropTypes.arrayOf(PropTypes.shape({})),
  contentfulFileShareDescriptionData: PropTypes.arrayOf(PropTypes.shape({})),
  currentMemberList: PropTypes.arrayOf(PropTypes.shape({})),
  memberEmail: PropTypes.string,
  setShouldRefetchUserList: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

const defaultProps = {
  authUser: null,
  contentfulFileShareData: null,
  contentfulFileShareDescriptionData: null,
  currentMemberList: null,
  userId: null,
};

const MEMBER_CONTENT_REDUCER_INITIAL_STATE = {
  currentUser: null,
  isRegisteredForCurrentYear: false,
};

function memberContentReducer(state, { type, payload }) {
  switch (type) {
    case 'setCurrentUser':
      return {
        ...state,
        ...payload,
      };
    case 'setIsRegisteredForCurrentYear':
      return {
        ...state,
        ...payload,
      };
    case 'clearState':
      return MEMBER_CONTENT_REDUCER_INITIAL_STATE;
    default:
      return MEMBER_CONTENT_REDUCER_INITIAL_STATE;
  }
}

// Component Definition
const MemberContent = ({
  authUser,
  contentfulFileShareData,
  contentfulFileShareDescriptionData,
  currentMemberList,
  memberEmail,
  setShouldRefetchUserList,
  userId,
}) => {
  const [state, dispatchState] = useReducer(
    memberContentReducer,
    MEMBER_CONTENT_REDUCER_INITIAL_STATE,
  );

  const {
    currentUser,
    isLoadingUserData,
    isRegisteredForCurrentYear,
  } = state;

  useEffect(() => {
    // Find if the current user is among the registerd users
    if (currentMemberList
      && Object.keys(currentMemberList).length > 0
      && Object.keys(currentMemberList).includes(userId)
    ) {
      dispatchState({
        type: 'setIsRegisteredForCurrentYear',
        payload: {
          isRegisteredForCurrentYear: true,
        },
      });
    }
  }, [currentMemberList, userId]);

  useEffect(() => {
    if (
      !isRegisteredForCurrentYear
      && currentMemberList
      && Object.keys(currentMemberList).length > 0
    ) {
      // Find the current user's index
      const indexOfUser = Object.keys(currentMemberList).indexOf(userId);

      // Separate the values into an array
      const valuesOnly = Object.values(currentMemberList);

      // Set the current user's data
      dispatchState({
        type: 'setCurrentUser',
        payload: {
          currentUser: valuesOnly[indexOfUser],
        },
      });
    }
  }, [isRegisteredForCurrentYear, currentMemberList, userId]);

  if (isLoadingUserData) {
    return <CircularProgress size={64} thickness={4} />;
  }

  const isAdmin = authUser && ADMIN_USER_EMAIL_LIST.includes(authUser.email);

  return (
    <div>
      <h2>{`${isAdmin ? 'Admin ' : ''}Member Dashboard`}</h2>

      <Box mb={2}>
        <EnhancedAlert severity="info">
          {`Welcome ${memberEmail}`}
        </EnhancedAlert>
      </Box>

      <Cards>
        <MemberInfo
          currentUser={currentUser}
          setShouldRefetchUserList={setShouldRefetchUserList}
        />

        <MemberTasks
          currentUser={currentUser}
          isRegisteredForCurrentYear={isRegisteredForCurrentYear}
        />
      </Cards>

      <h2>For Members</h2>

      <Cards>
        {contentfulFileShareData
          && contentfulFileShareData.map((edge, index) => (
            <MemberFileShareCard
              description={
                contentfulFileShareDescriptionData
                  ? contentfulFileShareDescriptionData[index].node.description
                  : null
              }
              key={edge.node.id}
              node={edge.node}
            />
          ))}
      </Cards>

      <div
        css={{
          display: 'block',
          [presets.Tablet]: {
            display: 'none',
          },
        }}
      >
        <hr
          css={{
            border: 0,
            height: 2,
            marginTop: 10,
          }}
        />
        <SidebarBody inline yaml={membersSidebar} />
      </div>
    </div>
  );
};

MemberContent.propTypes = propTypes;
MemberContent.defaultProps = defaultProps;

export default MemberContent;
