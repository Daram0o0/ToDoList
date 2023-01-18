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
//         - 스크롤
//         - 현재날짜 우측 상단(?)
//         - 할일 퍼센트 옆으로 스크롤
// 요구조건 :
//     - Git 허브 사용하기 하루 3~5커밋 해보도록 노력할것!

import './App.css';
import {useState} from 'react';

function App() {
  const [list, setList] = useState(); //할 일을 입력받는 state
  const [makelist, setMakelist] = useState([]); //항목담는 배열
  const [ischeck, setIscheck] = useState(false); //makelist 체크 상태 변수
  const [ischecked, setIschecked] = useState(false); //endlist 체크 상태 변수
  const [endlist, setEndlist] = useState([]); //끝난 일 배열

  function makelists() { //할일 생성 함수
    setMakelist([...makelist, list]);
    setList("");
  }

  function deletelists(index) { //할일 삭제 함수
    let temp = [...makelist];
    temp.splice(index, 1);
    setMakelist(temp);
  }

  function fixlists(index) { //할일 수정 함수
    let temp = [...makelist];
    let temp2 = temp.splice(index, 1);
    setMakelist(temp);
    setList(temp2);
  }

  function checkboxfunc(e, index) { //체크박스 선택: 할 일 -> 다 한 일 
    if (e.target.checked){
      let temp = [...makelist];
      let temp2 = temp.splice(index, 1);
      setMakelist(temp);
      setEndlist([...endlist,temp2]);
      // setIscheck(false);
      console.log(e.target.checked);
    }
    else {
      setIscheck(true);
      console.log(e.target.checked);
    }
  }

  function recheckboxfunc(e, index) { //체크박스 선택: 다 한 일 -> 할 일 
    if(e.target.checked){
      let temp = [...endlist];
      let temp2 = temp.splice(index, 1);
      setEndlist(temp);
      setMakelist([...makelist,temp2]);
      // setIschecked(false);
      console.log(e.target.checked);
    }
    else {
      setIschecked(true);
      console.log(e.target.checked);
    }
  }

  function sliderfunc(e, index) { //슬라이더 함수
    if (e.target.value == 100) {
      let temp = [...makelist];
      let temp2 = temp.splice(index, 1);
      setMakelist(temp);
      setEndlist([...endlist,temp2]);
      // e.target.value=50;
    }
  }

  return (
    <div className='background'>
      <div>
        <h1 className='font-background'>Things to do</h1>
      </div>
      <hr/>
      <div className='input-background'>
        <input className='input' value={list} placeholder="할 일을 입력하세요" onChange={(e)=>{setList(e.target.value)}}/>
        <button className='btn' onClick={()=>{makelists()}}>+</button>
      </div>
      <hr/>
      <div className='scroll'>
      {makelist.map((value, index)=>{
        return(
          <div>
            <input type="checkbox" value={ischeck} onClick={(e)=>{checkboxfunc(e, index)}}/>
            <span className='list-background'>{value}</span>{" "}
            <button type="button" onClick={()=>{fixlists(index)}}><img src="https://cdn-icons-png.flaticon.com/512/1301/1301727.png" width="20px" height="20px"/></button>{" "}
            <button type="button" onClick={()=>{deletelists(index)}}><img src="https://cdn-icons-png.flaticon.com/512/4313/4313306.png" width="20px" height="20px"/></button>
            <div><input type="range" id="percent" min="0" max="100" onChange={(e)=>{sliderfunc(e, index)}}/></div>
          </div>
        )
      })}
      </div>

      {endlist.map((value, index)=>{
        return(
          <div className='scroll'>
            <input type="checkbox" value={ischecked} onClick={(e)=>{recheckboxfunc(e, index)}}/>
            <span className='list-background'>{value}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
