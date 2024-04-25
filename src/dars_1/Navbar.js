import React from "react";
function Tbody(props){
  
  return(
    <tbody>
      <tr>
        <td>{props.number}</td>
        <td>{props.post.language}</td>
        <td>{props.post.stack}</td>
        <td><button className="btn btn-outline-danger" onClick={()=>{props.deletePost(props.post)}}>Delete</button></td>
      </tr>
    </tbody>
  )
}
export default Tbody;