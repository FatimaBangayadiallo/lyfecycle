import React from 'react';

class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      users:[

      ]
    }
  }

  async getUsers() {
    //gets data using fetch from url
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //converts response to json format and returns converted data
        return response.json();
      })
      .then((users) => {
        //receives the converted data and updates the users state to the converted data
        this.setState({ users: users });
      });
  }
  //gets called when the component is first mounted
  componentDidMount() {
    //calls getUsers method when component is first mounted
    this.getUsers();
  }

  componentDidUpdate() {
    //runs when a state is updated
    console.log("state updated");
  }

  componentWillUnmount() {
    //runs when a component is about to be unmounted
    console.log("unmounting");
  }

  render(){
    return(
      <>
      {this.state.users.map((user) => {
         return(
           <div>
            <h1 key={user.id}>{user.name}</h1>
            <h1>{user.email}</h1>
           </div>
         )
       })}
      </>
    );
  }
};
export default UserClass;
