import React, {Fragment} from 'react'
import pic from '../../pic.svg'

const Empty = props => (
  <Fragment>
    <img src={pic} alt="" />
    <p style={{ color: `${props.theme === 'light' ? '#ccc' : '#666' }`}}>You are anything but lazzy! Now go and learn react champ!</p>
  </Fragment>
)

export default Empty;