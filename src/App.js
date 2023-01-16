// 프로젝트 : 투두리스트 To Do List 오늘 할일 리스트 웹
// 필수기능 : 
//     - 오늘할 일을 입력시킬 인풋 시스템
//     - 끝마친 일을 확인 할수있도록 기능 ex) 체크박스 또는 ~끝~ 이런식으로, 회색폰트
//     - 리스트에 취소 기능
//     - 리스트 수정 기능
//     - 볼만한 웹 사이트로 만들기 CSS쓰고 이런의미
    
// 부가적인 기능들 : 
//     - 알아서잘
//         - 날짜별 관리라든가
//         - 태그시스템
// 요구조건 :
//     - Git 허브 사용하기 하루 3~5커밋 해보도록 노력할것!

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [list, setList] = useState();
  const [makelist, setMakelist] = useState([]);

  function makelists() {
    setMakelist([...makelist, list]);
    setList("");
  }

  function deletelists(index) {
    let temp = [...makelist];
    temp.splice(index, 1);
    setMakelist(temp);
  }

  function fixlists(index) {
    let temp = [...makelist];
    let temp2 = temp.splice(index, 1);
    setMakelist(temp);
    setList(temp2);
  }

  function checkboxfunc(e, index) {
    if(e.target.checked == true){
      makelist[index].style.color = "red";
      console.log(true);
    }
    else {
      console.log(false);
    }
  }

  return (
    <div>
      <div style={{backgroundColor:"lightblue"}}>
        <h1>TodoList</h1>
      </div>
      <hr/>
      <div>
        <input value={list} placeholder="할 일을 입력하세요" onChange={(e)=>{setList(e.target.value)}}/>
        <button onClick={()=>{makelists()}}>+</button>
      </div>
      <hr/>
      {makelist.map((value, index)=>{
        return(
          <div>
            <input type="checkbox" onClick={(e)=>{checkboxfunc(e, index)}}/>
            {value}
            <button onClick={()=>{fixlists(index)}}>수정</button>
            <button onClick={()=>{deletelists(index)}}>-</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
