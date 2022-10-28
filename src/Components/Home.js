import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import Emp from './Emp';
import {Link,useNavigate} from 'react-router-dom'


function Home(){

    let history=useNavigate()

    let handleEdit=(id,name,age)=>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Age',age)
        localStorage.setItem('Id',id)
        history("/")
    }

    
      
    const handleDelete=(id)=>{
        var index=Emp.map(function(e){
            return e.id
        }).indexOf(id);
        Emp.splice(index,1);
        history("/")
    }

    return <Fragment>
        <div style={{margin:"10 rem"}}>
        <Table stripped border size="sm">
            <thread>
                <tr>
                    <th>
                        name
                    </th>
                    <th>
                        age
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thread>
            <tbody>
                {
                    Emp && Emp.length>0?Emp.map((item)=>{
                        return(
                            <tr>
                                <td>
                                    {item.Name}
                                </td>
                                <td>
                                    {item.Age}
                                </td>
                                <td>
                                    <Link to={`/edit`}>
                                    <Button onClick={()=>handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    "No data available"
                }
            </tbody>
        </Table>
        <br>
        </br>
            <Link className='d-grid gap-2' to='/create' >
             <Button size="lg">Create</Button>
            </Link>
        </div>
    </Fragment>
}

export default Home;
