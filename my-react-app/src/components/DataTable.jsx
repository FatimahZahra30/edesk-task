import userData from '../data.json'; 
import { useState } from 'react';
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
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.language}</td>
                    <td>{info.id}</td>
                    <td>{info.version}</td>
                </tr>
            )
        }
    )

  return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>ID</th>
                    <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <button 
                onClick={handlePrev} 
                disabled={currentPage === 1}
                style={{ padding: '5px 15px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                >
                ← Previous
                </button>
                
                <span>Page <strong>{currentPage}</strong> of {totalPages}</span>
                
                <button 
                onClick={handleNext} 
                disabled={currentPage === totalPages}
                style={{ padding: '5px 15px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                >
                Next →
                </button>
            </div>
        </div>
    );
}

export default DataTable;