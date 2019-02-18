import React, {Fragment} from 'react'
import pic from '../../pic.svg'

const Empty = () => (
  <Fragment>
    <img src={pic} alt="" />
    <p style={{color: "#ccc"}}>You are anything but lazzy! Now go and learn react champ!</p>
  </Fragment>
)

export default Empty;