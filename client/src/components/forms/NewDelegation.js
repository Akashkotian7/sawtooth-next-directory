import React, { Component } from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import './NewDelegation.css';
import DelegationHeader from 'components/forms/DelegationHeader';
import NewDelegationRoleList from 'components/forms/NewDelegationRoleList';
import NewDelegationForm from 'components/forms/NewDelegationForm';

/**
 *
 * @class       NewDelegationForm
 * @description Component encapsulating a reusable chat form
 *              suitable for composing within containers where DelegationForm
 *              functionality is required
 *
 */
class NewDelegation extends Component {

  /**
   * Render entrypoint
   * @returns {JSX}
   */
  render () {
    return (
      <div>
        <div>
          <DelegationHeader/>
        </div>
        <div className= 'Header-content'>
          <Icon name='arrow left' size='big' className='left-icon'/>
          <p className='header-name'>
          New Delegation
          </p>
        </div>
        <div className='role-search'>
          <Input size='large' icon='search'
            className='input-box' placeholder='Search your roles'/>
        </div>
        <div>
          <div className='header-controller'>
            <NewDelegationRoleList/>
            <NewDelegationForm/>
          </div>
          <diV>
            <Button id='Send-button'>
                Send
            </Button>
          </diV>
        </div>
      </div>
    );
  }
};

export default NewDelegation;
