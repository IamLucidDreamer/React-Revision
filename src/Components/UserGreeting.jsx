import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //     if (this.state.isLoggedIn) {
    //       return (
    //         <div>
    //           <div>Welcome Manas</div>
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div>
    //           <div>Welcome Guest</div>
    //         </div>
    //       );
    //     }

    // return (
    //   <div>
    //     <div>Welcome Manas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Manas</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Manas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    return this.state.isLoggedIn && <div>Welcome Manas</div>;
  }
}

export default UserGreeting;
