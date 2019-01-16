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
import { Form, TextArea } from 'semantic-ui-react';
import './NewDelegationForm.css';


/**
 *
 * @class       NewDelegationForm
 * @description Component encapsulating a reusable chat form
 *              suitable for composing within containers where DelegationForm
 *              functionality is required
 *
 */
class NewDelegationForm extends Component {

  /**
   * Render entrypoint
   * @returns {JSX}
   */
  render () {
    return (
      <Form id='Form-content'>
        <Form.Field>
          <label>
              Delegate to
          </label>
          <input id='input-box-1'/>
        </Form.Field>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            id='input-box-2'
            label='From'
            defaultValue='November 1st 2018'/>
          <Form.Input
            fluid
            id='input-box-2'
            label='To'
            defaultValue='November 1st 2019'/>
        </Form.Group>
        <Form.Field>
          <label>
              Message to the Delegate
          </label>
          <TextArea
            id='text-area'/>
        </Form.Field>
        <Form.Field>
          <label>
              Note to Requesters
          </label>
          <TextArea
            id='text-area'/>
        </Form.Field>
      </Form>
    );
  }
};

export default NewDelegationForm;
