import React, { Component } from "react";
class App extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getTestQuery();
  };

  async getTestQuery() {

    const API_BASE_URL = process.env.REACT_APP_API_URL
    console.log(`### ${API_BASE_URL} ###`)
    // this.setState({ data: [{ firstname: 'Don', lastname: 'John' }] })
    const API_BASE = `api/v1`
    // const API_BASE = `http://172.25.0.4:3000/api`
    console.log(`${API_BASE}/test_query`);
    // const op await

    fetch(`${API_BASE}/test_query`)
      .then(data => {
        console.log(data)
        return data.json()
      })
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
