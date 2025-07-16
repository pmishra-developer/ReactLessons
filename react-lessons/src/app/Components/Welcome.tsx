//Public component; Exported
export default function Welcome(){
    return(
        <div>
            Welcome to Test Project
            <Private />
        </div>
        
    )
}

//Private component; Not exported
function Private(){
    return <div>This is Private inheritance</div>;   
}
