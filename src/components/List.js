import { useState,useEffect } from "react";
import React from 'react';
import {useForm} from 'react-hook-form';

import { Modal,Button } from "react-bootstrap";

import ItemDelete from "./itemDelete";
import ItemAdd from "./itemAdd";
import ItemAddFun2 from "./itemAdd-fun2";

import {  PlusCircleTwoTone } from "@ant-design/icons";



const url = "http://localhost:8080/users/allUsers";

const List = () => {

    const { register, handleSubmit } = useForm();


    const [ list , setList] = useState();
    const [ show , setShow ]=useState(false);

/**list有變動就拿最新資料 */
useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setList(result);
      },
    )
}, [list])

/** 控制Modal是否出現*/
const handleshow=()=>{
    setShow(true);
}
const handleclose=()=>{
    setShow(false);
}


/** 當表單送出後要連線DB add資料*/
const onSubmit = (data)=> {
    console.log(data)
    ItemAdd(data);
    setShow(false);

}


const style = {
    top: '65%',
    transform: 'translateY(-50%)',
    height: '40px',
    width:'40px'
  }

    return (
        <div>

            <h2 className="text-center" >test</h2>


             {/* <Button  variant="primary" onClick={handleshow} >
                add
             </Button>  */}
                <div style={style}>                
                    <PlusCircleTwoTone onClick={handleshow}/>
                </div>




            <Modal show={show} onHide={handleclose} visible="true">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div>
                    <span>id: </span>
                    <input placeholder="" defaultValue={null} {...register("id",{required:true})} />
                    </div> */}

                    <span>email: </span>
                    <input placeholder="" defaultValue={null} {...register("email",{required:true})} /> 

                    <Button variant="primary" type="submit">
                    add
                </Button>

                {/* <Button variant="secondary" onClick={handleclose}>
                    關閉
                </Button> */}

                </form>
            </Modal>


<ItemAddFun2></ItemAddFun2>

           <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> ID </th>
                            <th> email </th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        { list && list.map((data)=>{
                            return  <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.email}</td>
                                        <td><button className="btn btn-primary btn-option" onClick={(event) => ItemDelete(data.id)}>delete</button></td>
                                    </tr>
                        })
                        }

                    </tbody>

                </table>
           </div>

        </div>
    );
}

export default List;
