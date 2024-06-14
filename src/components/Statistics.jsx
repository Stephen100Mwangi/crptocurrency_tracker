/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Statistics = ({title,stat}) => {
  return (
    <div className='flex w-64 h-32 border-text border rounded-md flex-col space-y-5 items-center justify-start p-3'>
        <div className="text-text font-medium text-xl">{title}</div>
        <div className="text-black font-medium">{stat}</div>
    </div>
  )
}


Statistics.propTypes = {
    title: PropTypes.string,
    stat: PropTypes.number
}
export default Statistics
