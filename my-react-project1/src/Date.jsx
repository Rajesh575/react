function Date()
{
    const now = new Date();
    const currentDate = now.toDateString();
    const currentTime = now.toLocalTimeString();
    return(
        <>
        <h1>{currentDate}</h1>
        <h1>{currentTime}</h1>
        </>
    )
}
export default Date;