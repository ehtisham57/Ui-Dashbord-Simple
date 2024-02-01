// components/TableComponent.js
import React from 'react';
import { useTable } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css'
const TableComponent = ({ data }) => {
  const columns = React.useMemo(
    () =>
      Object.keys(data[0]).map((key) => ({
        Header: key,
        accessor: key,
      })),
    [data]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (

         <div className='container'>
    <table
     {...getTableProps()} 
     className="table table-bordered table-striped">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th style={{ height: '1px', backgroundColor: '#005471',color:"#ffffff" }} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody style={{ margin:"20px", justifyContent: 'center', alignItems: 'center', }} {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>


    </div>
  );
};

export default TableComponent;
