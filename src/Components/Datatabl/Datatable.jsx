import React from 'react'
import "./datatable.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userRows, userColumns } from '../../datasource';
function Datatable ({title,title2}){

    const handleDelete =()=> {
        
    }
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                 <Link to="/users/test" style={{ textDecoration: "none" }}> 
                  <div className="viewButton">View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        {title}  <Link className='link' to="/users/new" style={{textDecoration: "none"}}> {title2}</Link>
      </div>
     <div style={{ height: '90vh', width: '100%' }}>
     
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default Datatable
