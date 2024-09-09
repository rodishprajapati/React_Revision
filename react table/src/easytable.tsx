import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';
import { Person } from './easydata';
import { dataPerson } from './easydata';

function TableApp() {
// Create column helper
const columnHelper = createColumnHelper<Person>();


// Define columns
const columnsPerson = [
  columnHelper.accessor('firstName', {
    header: 'First Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
    cell: info => <i>{info.getValue()}</i>,
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    cell: info => info.getValue(),
  }),
];

const table = useReactTable({
  data:dataPerson,
  columns:columnsPerson,
  getCoreRowModel: getCoreRowModel(),
});


  return <>
  

  <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  }
  
  export default TableApp;