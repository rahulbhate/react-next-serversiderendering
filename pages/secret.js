import React, { useState, useEffect } from 'react';
import withAuth from '../utils/withAuth';
function Secret() {
  return (
    <div>
      <h3>This is secret page</h3>
    </div>
  );
}
export default withAuth(Secret);
