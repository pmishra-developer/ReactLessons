function WithParam({id, name:userName}:{id:number, name:string  })
{
    return(
        <div>
            Hello - {userName ? userName : "Guest"}! Your ID is {id}.
        </div>
    )
}
export default WithParam;