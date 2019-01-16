import React, { Component } from 'react';
// import { Checkbox, Table, Divider } from 'semantic-ui-react';
import './DelegationRoleStatus.css';


/**
 *
 * @class       NewDelegationForm
 * @description Component encapsulating a reusable chat form
 *              suitable for composing within containers where DelegationForm
 *              functionality is required
 *
 */
class DelegationRoleStatus extends Component {

  /**
   * Render entrypoint
   * @returns {JSX}
   */
  render () {
    return (
      <div className='delegation-main-container'>
        <div>
          <p id='content-header'>
              My Delegation
          </p>
        </div>
        <div className='Delegation-role-container-1'>
          <div className='delegation-role-sub-1'>
            <p className='Roles-count'>
                120 Roles
            </p>
            <p className='Roles-staus'>
                Accepted
            </p>
          </div>
          <div className='delegation-role-sub-2'>
            <div className='delegation-role-email'>
              <p>
                  Delegated to Nick
              </p>
              <span className='spam-email'>
                  (Nicols.criss@t-mobile.com)
              </span>
            </div>
            <div>
              <p>
                  From 01/01/2019 to 01/15/2019
              </p>
            </div>
          </div>
          <div>
            <p className='delegation-note'>
                Note:
            </p>
            <p>
                Loream ipsum dolor sit amet,random
                data that can be passed from component to component.
            </p>
          </div>
        </div>
        <div className='Delegation-role-container-1'>
          <div className='delegation-role-sub-1'>
            <p className='Roles-count'>
                10 Roles
            </p>
            <p className='Roles-staus1'>
                Pending
            </p>
          </div>
          <div className='delegation-role-sub-2'>
            <div className='delegation-role-email'>
              <p>
                  Delegated to Phil
              </p>
              <span className='spam-email'>
                  (Phil.cranston@t-mobile.com)
              </span>
            </div>
            <div>
              <p>
                  From 01/01/2019 to 01/15/2019
              </p>
            </div>
          </div>
        </div>
        <div className='Delegation-role-container-1'>
          <div className='delegation-role-sub-1'>
            <p className='Roles-count'>
                120 Roles
            </p>
            <p className='Roles-staus1'>
                Pending
            </p>
          </div>
          <div className='delegation-role-sub-2'>
            <div className='delegation-role-email'>
              <p>
                  Delegated to Jhon
              </p>
              <span className='spam-email'>
                  (Jhon.smith@t-mobile.com)
              </span>
            </div>
            <div>
              <p>
                  From 01/01/2019 to 01/15/2019
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default DelegationRoleStatus;
