import userData from '../data.json'; 
import { useState } from 'react';
import { Trash, Pencil, Eye } from 'lucide-react';
import './DataTable.css';

// react table reference: https://stackoverflow.com/questions/13624276/how-to-separate-table-rows-with-a-line,
// https://www.geeksforgeeks.org/reactjs/how-to-parse-json-data-into-react-table-component/
// sample json data reference: https://microsoftedge.github.io/Demos/json-dummy-data/

function DataTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = userData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(userData.length / rowsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleAlert = (infoRow) => {
        alert(`Name: ${infoRow.name}\n Language: ${infoRow.language}\n ID: ${infoRow.id}\n Version: ${infoRow.version}`);
    };

    const DisplayData=currentRows.map(
        (info, index)=>{
            return(
                <tr key={index}>
                    <td>{indexOfFirstRow + index + 1}</td> 
                    <td>{info.name}</td>
                    <td>{info.language}</td>
                    <td>{info.id}</td>
                    <td>{info.version}</td>
                    <td className="action-items">
                        <button className='view-button' onClick={() => handleAlert(info)}>
                            <Eye />
                        </button>
                        <Pencil className='pencil-icon'/>
                        <Trash className='trash-icon'/>
                    </td>
                </tr>
            )
        }
    )

  return(
        <div className="table-outer-container">
            <div className="table-container">
                <div className='table-name'>
                    Customer <strong>Details</strong>
                </div>
                <table className="table">
                    <thead>
                        <tr className="header-line">
                        <th>No.</th>
                        <th>Name</th>
                        <th>Language</th>
                        <th>ID</th>
                        <th>Version</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>
                </table>
                <div className="pagenation">
                     <span>Showing <strong>{currentPage}</strong> out of <strong>{totalPages}</strong> entries</span>

                    <div className="page-buttons">
                        <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="page-arrow"
                    >
                        &lt;
                    </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="page-arrow"
                        >
                        &gt;
                    </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DataTable;