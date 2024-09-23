import React from 'react'

const Table = ({taskList, switchTask, handleOnDelete}) => {
    const entryList = taskList.filter((item)=> item.type === "entry");
    const badList = taskList.filter((item)=> item.type ==="bad")

   const totalBadHr = badList.reduce((acc, i)=> { return acc + i.hr}, 0);
  return (
    
    <div className="row mt-5">
      <div className="col-md">
        <h3 className="text-center">Entry List</h3>
        <hr />
        {/* Entry List Table  */}
        <table className="table table-hover table-striped border">
          <tbody id="entryList">
          {entryList.map((item, i)=>{
                return  <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr}hr</td>
                <td className="text-end">
                <button onClick ={()=>handleOnDelete(item.id)}  className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                <button onClick = {()=>switchTask(item.id, 'bad')} className="btn btn-success"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </td>
                </tr>
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md">
        <h3 className="text-center">Bad list</h3>
        <hr />
        {/* Bad List Table  */}
        <table className="table table-hover table-striped border">
          <tbody id="badList">
            {
                badList.map((item, i)=>{
                    return  <tr key={item.id }>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr}hr</td>
                    <td className= "text-end">
                  
                    <button onClick = {()=>switchTask(item.id, 'entry')} className= "btn btn-warning"><i className= "fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button onClick ={()=>handleOnDelete(item.id)}
                    className= "btn btn-danger"><i className= "fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                    </tr>
                })
            }
          </tbody>
        </table>
        <div className=" alert alert-success">You could have saved = <span id="savedHrs">{totalBadHr}</span></div>
      </div>
    </div>
  )
}

export default Table