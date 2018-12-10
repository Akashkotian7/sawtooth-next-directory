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


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import * as customStore from '../../customStore';
import App from './App';
import { shallow } from 'enzyme';


const store = customStore.create();
const props = {
  getMe: () => { },
  getOpenProposals: () => { },
  getProposals: () => { },
  getRoles: () => { },
  me: {
    proposals: [{ id: 'proposalID' }],
    memberOf: ['']
  },
  roles: [],
  getBase: () => { },
  isAuthenticated: false,
  routes: () => { return [{ path: '/path', exact: '', nav: '' }] }
};

const newProps = {
  isAuthenticated: true,
  isSocketOpen: true,
  sendMessage: () => { },
  me: {
    proposals: [{ id: 'proposalID' }],
    memberOf: ['']
  },
  id: 'aaa',
  routes: () => { return [{ path: '/path', exact: '', nav: '' }] }
}

const wrapper = shallow(<App {...props} store={store} />);


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter><App {...props} /></BrowserRouter>
    </Provider>, div
  );

  ReactDOM.unmountComponentAtNode(div);

  const wrapper = shallow(<App {...newProps} store={store} />);
  wrapper.dive().instance().componentDidUpdate(props);
});


it('calls the renderGrid function', () => {
  wrapper.dive().instance().renderGrid();
});

it('calls the hydrate function', () => {
  wrapper.dive().instance().hydrate();
});

test.skip('calls the hydrate sidebar function', () => {
  const wrapper = shallow(<App routes={() => { }} me='' store={store} />);
  wrapper.dive().instance().hydrateSidebar();
});
