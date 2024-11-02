function Dateandtime(){

    const now = new Date();
    const date = now.getDate();
    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();

    const monthindex = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]
    const dayindex = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

    const days = dayindex[day];
    const months = monthindex[month];

    return(
        <>
        <h1>Today:{days}</h1>
        <h1>Date:{date}</h1> 
        <h1>Month:{months}</h1>
        <h1>Year:{year}</h1>
        </>
    )
}
export default Dateandtime;