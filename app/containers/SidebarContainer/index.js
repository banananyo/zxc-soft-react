import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { compose, withState, withHandlers } from 'recompose';
import zxcIcon from 'images/favicon.png';

const SidebarWrapper = styled.div`
  display: block;
`;

function SidebarContainer(props) {
  return (
    <SidebarWrapper>
      
    </SidebarWrapper>
  );
}

SidebarContainer.propTypes = {
  visible: PropTypes.bool,
  open: PropTypes.func,
  close: PropTypes.func,
  toggle: PropTypes.func,
};

export default compose(
  withState('visible', 'setVisible', true),
  withHandlers({
    open: props => () => {
      props.setVisible(true);
    },
    close: props => () => {
      props.setVisible(false);
    },
    toggle: props => () => {
      props.setVisible(!props.visible);
    },
  }),
)(SidebarContainer);
