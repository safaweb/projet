import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../../Admins/datatablesourceE";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getevent } from "../../../redux/Action/EventAction";

const Datatable = () => {

  const { Loading, event, error } = useSelector((state) => state.Event_Select);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getevent())
  }, [])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/Organisateur/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            //  onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>{Loading ? (
      <h1 className="text" > Loading ... </h1>
    ) :
      <div className="datatable">
        <div className="datatableTitle">
          Tout Evenement
        </div>
        <DataGrid
          className="datagrid"
          rows={event}
          getRowId={(row) => row._id}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection />
      </div>
    }
    </div>
  );
};

export default Datatable;
