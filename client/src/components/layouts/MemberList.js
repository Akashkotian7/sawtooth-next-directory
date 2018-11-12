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
import { Segment } from 'semantic-ui-react';


import PropTypes from 'prop-types';


import './MemberList.css';


/**
 *
 * @class MemberList
 * Component encapsulating the member list
 *
 */
export default class MemberList extends Component {
  /**
   *
   * Hydrate data
   *
   */
  componentDidMount() {
    const { getUser, owners, users } = this.props;

    owners && owners.map(userId => (users && users.find(user => user.id === userId)
      ? undefined
      : getUser(userId)));
  }


  renderUserSegment(userId) {
    const { users } = this.props;

    if (!users) {
      return null;
    }

    const user = users.find(user => user.id === userId);

    return (
      <Segment compact key={userId}>
        {user && user.name}
      </Segment>
    );
  }


  render() {
    const { members, owners } = this.props;

    return (
      <div>
        { owners && owners.map(owner => (
          this.renderUserSegment(owner)
        )) }

        { members && members.map(member => (
          this.renderUserSegment(member)
        )) }
      </div>
    );
  }
}


MemberList.propTypes = {
  getUser: PropTypes.string,
  owners: PropTypes.arrayOf(PropTypes.string),
  users: PropTypes.arrayOf(PropTypes.string),
  members: PropTypes.arrayOf(PropTypes.string),
};


MemberList.defaultProps = {
  getUser: '',
  owners:'',
  users:'',
  members:'',
};
