import React from 'react';
 
//The Firebase Context from the Firebase module (folder) is used to provide a Firebase 
//instance to your entire application in the src/index.js file.
const FirebaseContext = React.createContext(null);

//HIGHER ORDER COMPONENT
//returns a component with firebase support
export const withFireBase = Component => props => (
    <FirebaseContext.Consumer>
        { firebase => <Component {...props} firebase={firebase}/>  }
    </FirebaseContext.Consumer>
);

export default FirebaseContext;