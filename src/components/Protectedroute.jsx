
function Protectedroute({islogin,children}){
    if(islogin){
        return children
    }
 return (
    <div>Please Login First</div>
 )
}

export default Protectedroute