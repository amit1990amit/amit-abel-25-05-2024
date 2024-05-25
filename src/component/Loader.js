import React from 'react'
import { Oval } from 'react-loader-spinner'

const Loader = props => {
  return (
    <div className="loader">
    <Oval
      height={40}
      width={40}
      color="blue"
      ariaLabel="loading"
    />
  </div>
  )
}
export default React.memo(Loader)