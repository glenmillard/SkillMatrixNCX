import React from 'react';
import './App.css';

import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';

// The docs recommended a class so I followed their guide
// I created the grid with the sort and filter enabled
// I didn't want to get too fancy as I just wanted to get it done!

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: 'Name', field: 'name', sortable: true, filter: true},
                {headerName: 'Query - Current Campaign', field: 'campaign',sortable: true, filter: true},
                {headerName: 'Query - Current Project', field: 'project',sortable: true, filter: true},
                {headerName: 'True-False', field: 'truefalse', sortable: true, filter: true}
            ],
            rowData: [
                {name: 'Your Name Goes Here', campaign: 'Your Campaign', project: 'Your Project', truefalse: 'True'},
                {name: 'My Name Goes Here', campaign: 'My Campaign', project: 'Your Project', truefalse: 'False'},
                {name: 'Our Name', campaign: 'Our Campaign', project: 'Your Project', truefalse: 'True'}
                
            ]

        };
    }
     render() {
        return (
            <div className="ag-theme-balham"
            style={{
                width: 825,
                height: 300
            }}
            >
                <AgGridReact columnDefs={this.state.columnDefs}
                rowData={this.state.rowData} />

            </div>
        )
    }
}

export default App;
