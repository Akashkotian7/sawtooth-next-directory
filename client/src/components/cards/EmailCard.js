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
import { Button, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './EmailCard.css';


/**
 *
 * @class         EmailCard
 * @description   EmailCard component
 *
 *
 */
class EmailCard extends Component {

  /**
   * Render entrypoint
   * @returns {JSX}
   */
  render() {

    return (
      <div className='main-container'>
        <div className='snapshot-header-container'>
          <div className='snapshot-header-sub-container'>
            <p className='snapshot-header'>Your Daily Snapshot</p>
            <p className='snapshot-header-subtext'>November 17th, 2018</p>
          </div>       
        </div>
        <div>
          <div className='snapshot-main-container'>
            <div className='snapshot-sub-container'>
              <p className='email-number'>39</p>
              <p className='email-action'>Pending Across 12 Roles</p>
            </div>
            <div className='snapshot-sub-container'>
              <p className='email-number'>9</p>
              <p className='email-action'>About To Expire</p>
            </div>
            <div className='snapshot-sub-container'>
              <p className='email-number'>3</p>
              <p className='email-action'>Delegated</p>
            </div>
            <div className='snapshot-sub-container'>
              <p className='email-number'>39</p>
              <p className='email-action'>Pending Across 12 Roles</p>
            </div>
            <div className='snapshot-sub-container'>
              <p className='email-number'>9</p>
              <p className='email-action'>About To Expire</p>
            </div>
            <div className='snapshot-sub-container'>
              <p className='email-number'>3</p>
              <p className='email-action'>Delegated</p>
            </div>
          </div>
          <div className='ui divider'></div>
          <div className='recent-request'>
            <h1 className='recent-request-header'>Recent Request</h1>

          </div>
          <div className='recent-request-container'>
            <div className='recent-request-sub-container'>
              <div className='recent-request-box'>
                <div className='recent-request-person-profile'>
                  <div className='recent-request-person-profile-image'>
                    <img
                      src='http://i.pravatar.cc/500' 
                      className='ui-avatar-image2'/>
                  </div> 
                  <div className='email-first-box-sub'>
                    <h1 className='email-first-box-sub-header'>
                    Skyler Brooks</h1>
                    <p className='email-first-box-sub-para'>
                    Big data developer is very hard to find in nower days</p>
                  </div>
                </div>
                <div>
                  <div className='Email-second-box'>
                    <p></p>
                  </div>
                  <div className='boxxxx'>
                    <div>
                      <Image
                        avatar
                        src='http://i.pravatar.cc/500' 
                        id='ui-avatar-image'/>
                    </div>
                    <div className='Email-third-box-sub'>
                      <p></p>

                    </div>
                  </div>


                </div>
                <div className='Email-fourth-box'>
                  <Button id='button-1'>Approve</Button>
                  <Button id='button-2'>Reject</Button>
                  <Button id='button-3'>Show in Next</Button>
                </div>     
              </div>
              <div className='Email-container-2'>

              </div>
            </div>
          </div>
        </div>
        <div className='email-footer'>
          <div className='footer-content-1'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9Gc
            QNKjg4Y6WWbB9eCG1w8_ba8YPqAn-daqRmc7tbCSwS0Ot2Ido6'
            className='footer-image-2'/>
          </div>
          <div className='footer-content-2'>
            <p className='footer-para-1'>Copyright 2018 NEXT, T-Mobile</p>
            <p className='footer-para-2'>Dont wnt to recieve these emails?</p>
            <p className='footer-para-3'>Unsubscribe</p>

          </div>
          <div className='footer-content-3'>
            <img src='https://image.shutterstock.com
            /image-photo/kiev-ukraine-november-02-2017-260nw-757730329.jpg' 
            className='footer-image-1'/>
          </div>

        </div>
      </div>
    );
  }
}


export default EmailCard;
