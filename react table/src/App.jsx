import { createTable } from '@tanstack/react-table';

const App=()=>{

const table=createTable();

  const columns = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'age',
      header: 'Age',
    },
  ];
  
  const data = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 22 },
  ];


    const tableInstance = table.createInstance({
      data,
      columns,
    });
  


  return (
    <table>
      <thead>
        {tableInstance.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>{header.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>{cell.render('Cell')}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default App;