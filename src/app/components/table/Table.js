"use client"
import React, { useState } from 'react'
import data from './excel'
import TableComponent from './Tablecompo'
const Table = () => {

  return (
    <div>
      <TableComponent data={data} />
    </div>
  )
}

export default Table