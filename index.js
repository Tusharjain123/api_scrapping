const axios =require('axios')
const contestData=async ()=>{
    const contest_data = await axios.get("https://www.kontests.net/api/v1/codeforces");
    (contest_data.data).forEach(element => {
        console.log(element.name)
        console.log(element.url)
        
    })
}
contestData()
