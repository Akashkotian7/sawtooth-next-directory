import React, { Component } from 'react';
import DelegationHeader from 'components/forms/DelegationHeader';
import DelegationRoleStatus from 'components/forms/DelegationRoleStatus';

/**
 *
 * @class       DelegationMainForm
 * @description Component encapsulating a reusable chat form
 *              suitable for composing within containers
 *              where DelegationMainForm
 *              functionality is required
 *
 */
class DelegationStatus extends Component {
  isButtonNeeded = true;

  /**
   * Render entrypoint
   * @returns {JSX}
   */
  render () {
    return (
      <div>
        <div>
          <DelegationHeader isButtonNeeded = {this.isButtonNeeded}/>
        </div>
        <div>
          <DelegationRoleStatus/>
        </div>
      </div>
    );
  }
};

export default DelegationStatus;
