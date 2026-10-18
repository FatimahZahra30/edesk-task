import userData from '../data.json'; 
import { useState } from 'react';
import { Trash, Pencil, Eye } from 'lucide-react';
import './DataTable.css';

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
                        <button className='view-button'>
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
                <div className="pagenation" style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>

                            <span>Showing <strong>{currentPage}</strong> out of <strong>{totalPages}</strong> entries</span>
                            
                            <div className='page-buttons'>
                                <button 
                                onClick={handlePrev} 
                                disabled={currentPage === 1}
                                style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                                >
                                ← Previous
                                </button>
                            
                                <button 
                                onClick={handleNext} 
                                disabled={currentPage === totalPages}
                                style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                                >
                                Next →
                                </button>
                            </div>
                    </div>
            </div>
        </div>
    );
}

export default DataTable;