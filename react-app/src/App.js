import React, { Component } from "react";
class App extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getTestQuery();
  };

  getTestQuery() {
    // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
    // console.log(API_BASE_URL)
    const API_BASE = `/api/v1`
    fetch(`${API_BASE}/test_query`)
      .then(data => data.json())
      .then(res => this.setState({ data: res }))
  };

  render() {
    const data = this.state.data.map((item) =>
      <li key={item.id}>{item.firstname} {item.lastname}</li>
    )
    if (this.state.data.length) {
      return (
        <div>
          <ol>
            {data}
          </ol>
        </div>
      )
    }
    return <p>No data {data}</p>
  }
}
export default App;
