import React from 'react'
import { Oval } from 'react-loader-spinner'

const Loader = props => {
  return (
    <div className="loader">
    <Oval
      height={60}
      width={60}
      color="blue"
      ariaLabel="loading"
    />
  </div>
  )
}
export default React.memo(Loader)