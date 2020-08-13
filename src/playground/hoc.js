// Higher Order Component (hoc) -a component (HOC) that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return <div>
    <h1>Info</h1>
    <p>The info is:{props.info}</p>
    </div>
}
const withAdminWarning = (WrappedComponent) => {
    
    return (props) => (
        <div> 
{props.isAdmin && <p>This is private info. Please dont share</p>}
         <WrappedComponent {...props}/>
         </div>
    )
};

const requireAuthentification = (WrapperComponent) => {
    return (props) => (
         <div>
         {props.isAuthenticated ? (
            <WrapperComponent {...props}/> 
         ) : (<p>please login to view the info</p>)
         }
         </div>

    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the detailss"/>, document.getElementById('app'))