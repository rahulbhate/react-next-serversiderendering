// This is the Link API
import React from 'react';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-reusable-components/src/components/Button/Button';
function Index() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Home Page</h2>
            <p>
              ABOUT US Amalgamated Australian Investment Group (aaig, the Group
              or the Company) was established in 2009 to take advantage of the
              fragmented nature of the Financial Services industry. With our aim
              being to build an integrated and diversified financial services
              business by acquiring businesses within this sector as
              opportunities arise. Since inception, the Group has invested
              heavily in both domestic and international expansion, successfully
              completing approximately 15 full and part acquisitions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth(Index);
