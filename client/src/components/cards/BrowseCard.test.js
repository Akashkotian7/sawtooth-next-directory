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
import { shallow } from 'enzyme';

import BrowseCard from './BrowseCard';


describe('BrowseCard component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
      details: {
        name: '',
        category: '',
        admins: []
      }
    };

    ReactDOM.render(
      <BrowseCard {...props} />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("calls prop `onToggle` when icon clicked", () => {
    const props = {
      details: {
        name: '',
        category: '',
        admins: []
      }
    };

    const wrapper = shallow(<BrowseCard {...props} />);
    wrapper.find('#browse-tile-pinned-icon').simulate('click');

  });
});
