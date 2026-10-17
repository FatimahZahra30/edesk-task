import userData from '../data.json'; 

function DataTable() {
    const DisplayData=userData.map(
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
        </div>
    );
}

export default DataTable;