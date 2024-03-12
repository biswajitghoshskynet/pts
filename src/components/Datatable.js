import React from 'react'
import DataTable from 'react-data-table-component';


export default function Datatable({ columns, data, filterItem }) {
    // custom style
    const customStyles = {
        headRow: {
            style: {
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: '#dce9ee',
                fontWeight: '600',
                backgroundColor: '#eff7fa',
                minHeight: '45px'

            },
        },
        headCells: {
            style: {
                '&:not(:last-of-type)': {
                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightColor: '#dce9ee',
                },
            },
        },
        cells: {
            style: {
                '&:not(:last-of-type)': {
                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightColor: '#dce9ee',
                },
            },
        },
    };


    // .csv
    function convertArrayOfObjectsToCSV(array) {
        let result;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }
    function downloadCSV(array) {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;

        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

    const Export = ({ onExport }) => <div><button className='btn btn-primary btn-sm' onClick={e => onExport(e.target.value)}>Export</button></div>



    // search
    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
          
                <div>
                    <input id="search"
                        type="text"
                        placeholder={`Search By ${filterItem}`}
                        aria-label="Search Input"
                        value={filterText}
                        onChange={onFilter}
                        className="form-control form-control-sm"
                    />
                </div>
           

        </>
    );

    const Filtering = () => {
        const [filterText, setFilterText] = React.useState('');
        const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
        const filteredItems = data.filter(
           
            (item) =>(
               
                item.team && item.team.toLowerCase().includes(filterText.toLowerCase())
            )
        );

        const subHeaderComponentMemo = React.useMemo(() => {
            const handleClear = () => {
                if (filterText) {
                    setResetPaginationToggle(!resetPaginationToggle);
                    setFilterText('');
                }
            };

            return (
                <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
            );
        }, [filterText, resetPaginationToggle]);

        const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, [])

        return (
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                customStyles={customStyles}
                subHeaderComponent={[actionsMemo, subHeaderComponentMemo]}
                persistTableHead
                
            />
        );
    };

    return (
        <>
            <Filtering />

        </>
    )
}
