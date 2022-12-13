import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListContext from "../Context/ListContext";

const CreateListInput = styled.input`
  height: 50px;
  margin-left: 26%;
  margin-top: 10px;
  font-size: 2em
`

const CreateListButton = styled.button`
  border: 1px solid black
  height: 50px;
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 7px;
`


export function CreateList() {

  const { todos_list } = useContext(ListContext);

  const navigate = useNavigate();

  let Title = ''

  const HandleInput = (event) => {
    if (event.key === 'Enter') {
      todos_list.title = Title
      navigate('/todos-list');
    }
    else if (event.type === 'click') {
      todos_list.title = Title
      navigate('/todos-list')
    } else {
      Title = event.target.value
    }
  }

  return (
    <>
      <CreateListInput type={'text'} onKeyUp={HandleInput} placeholder='List Title' autoFocus />
      <CreateListButton className="btn btn-dark" type="button" onClick={HandleInput}>Create List</CreateListButton>
    </>
  )
}