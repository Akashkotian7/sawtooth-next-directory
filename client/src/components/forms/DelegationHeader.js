/* Copyright 2018 Contributors to Hyperledger Sawtooth

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
----------------------------------------------------------------------------- */

import React, { Component } from 'react';
import { Icon, Button} from 'semantic-ui-react';
import './DelegationHeader.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 *
 * @class       DelegationHeader
 * @description Component encapsulating a reusable chat form
 *              suitable for composing within containers where DelegationHeader
 *              functionality is required
 *
 */
class DelegationHeader extends Component {

  static propTypes = {
    isButtonNeeded: PropTypes.bool,
  };

  /**
   * Render entrypoint
   * @returns {JSX}
   */
  render () {
    return (
      <div className='header-main-container'>
        <div className='header-sub-container'>
          <h1 className='title'>
          Delegations
          </h1>
          <div className='button-prop'>
            <div className='button-content'>
              {this.props.isButtonNeeded ? <Button
                id='required-button'
                icon='add'
                size='small'
                content='Create New Delegation'
                labelPosition='left'
                as={Link}
                to='Deligation2'/> : ''}
            </div>
            <div>
              <Icon link name='close'  size='huge' id='Icon'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DelegationHeader;
