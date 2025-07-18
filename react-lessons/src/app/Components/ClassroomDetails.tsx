function Classroom({Standard,Section:sec="A",MentorName}:{Standard:number,Section:string,MentorName:string}){
return(
    <div>
        You belongs to {Standard} {sec} and your Class Teacher Name is {MentorName} !! Happy Learning !!!
    </div>
);
}
export default Classroom;