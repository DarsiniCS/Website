// function success()
// {
//     console.log("Success")
// }
// function fail()
// {
//     console.log("Fail")
// }
// function error()
// {
//     console.log("Error")
// }
// function exec(data,callback)
// {
//     if(data)
//     {
//         console.log(`balance:${data}`)
//     }
//     callback()
// }
// function trigger(data)
// {
//     if(data>0)
//     {
//         exec(data,success)
//     }
//     else if(data<=0)
//     {
//         exec(data,fail)
//     }
//     else{
//         exec("error",error)
//     }
// }
// trigger(2)
async function API()
{
    try{
        const response=await fetch('https://66e526fe5cc7f9b6273c6ceb.mockapi.io/register')
        const data=await response.json()
        // console.table(data)
        return data;
    }
        catch(error)
        {
      console.log(error);
        }
   
    // const response=fetch('https://66e526fe5cc7f9b6273c6ceb.mockapi.io/register')
    // const data=response.json()
    // console.log(data)
    // return data;
}
// API()
// const Apidata=API()
// console.log(Apidata)
async function ApiData()
{
    const apidata=await API()
    // console.log(apidata)
    const activeusers=apidata.filter(data=>data.isActive==false)
    console.log(activeusers)
    // const structuredata=apidata.map((data) => {console.log(data)})
    // console.log(structuredata)
}
ApiData()