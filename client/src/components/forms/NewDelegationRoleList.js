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
import { Checkbox, Table } from 'semantic-ui-react';
import './NewDelegationRoleList.css';


/**
 *
 * @class       NewDelegationRoleList
 * @description Component encapsulating a reusable chat form
 *              suitable for composing within containers where DelegationForm
 *              functionality is required
 *
 */
class NewDelegationRoleList extends Component {

  /**
   * Get array of Roles
   * @param {Array} data data
   * @returns {Array}
   */
  renderRows (data) {
    return data.map((item, index) =>
      <Table.Row
        key={index}>
        <Table.Cell>
          <Checkbox/>
        </Table.Cell>
        <Table.Cell>
          {item.title}
        </Table.Cell>
        <Table.Cell className='table-cell'>
          {item.id}
        </Table.Cell>
      </Table.Row>
    );
  }

  /**
   * Render entrypoint
   * @returns {JSX}
   */
  render () {
    const myItems = [{ title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' },
      { title: 'Jazz Beginer', id: 'r_safe_svc_jazz_rev_pline' }];
    return (
      <Table padded='very' id='table-content'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox/>
            </Table.HeaderCell>
            <Table.HeaderCell id='table-header'>
            Role Name
            </Table.HeaderCell>
            <Table.HeaderCell id='table-header'>
            Role ID
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderRows(myItems)}
        </Table.Body>
      </Table>
    );
  }
};

export default NewDelegationRoleList;
