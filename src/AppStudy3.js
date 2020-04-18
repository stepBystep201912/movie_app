import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("0. constructor");
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("2. componet rendered");
  }

  render() {
    console.log("1. I'm rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

/*
<button onClick={this.add()}>Add</button> 
-->이렇게 하면 클릭할 때 이벤트가 아니라 즉시 호출되는 거임
{this.add()}와 {this.add}:클릭할 때 이벤트 발생 의 차이점
*/

/*
mounting 생성
constructor()
render()
componentDidMount()

updating 업데이트
componentDidUpdate()

unmounting 소멸 - 페이지가 바뀔때, component가 바뀔때
componentWillUnmount()

----------------

constructor()
render()
componentDidMount() : 컴포넌트가 최초 마운트 됐을 때

render()
componentDidUpdate() : 컴포넌트가 업데이트 됐을 때 

componentWillUnmount()
*/
