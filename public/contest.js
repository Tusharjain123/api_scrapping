const contestDetail = document.querySelector(".contestDetails")
const contestData = async (value) => {
    const contest_data = await fetch("https://www.kontests.net/api/v1/" + value);
    const data = await contest_data.json();
    data.forEach(element => {
        console.log((element.start_time).slice(15, 17))
        let name = element.name
        let url = element.url
        let date = `${(element.start_time).slice(0, 10)} to  ${(element.end_time).slice(0, 10)}`
        let time = ""
        if (Number((element.start_time).slice(14, 16)) + 30 >= 60) {
            if (Number((element.end_time).slice(14, 16)) + 30 >=60) {
                time = `${Number((element.start_time).slice(11, 13)) + 6}:00 to ${Number((element.end_time).slice(11, 13)) + 6}:${(Number((element.end_time).slice(14, 16)) + 30)%60}`
            }
            else {
                time = `${Number((element.start_time).slice(11, 13)) + 6}:00 to ${Number((element.end_time).slice(11, 13)) + 5}:${Number((element.end_time).slice(14, 16)) + 30}`
            }
        }
        else {
            if (Number((element.end_time).slice(14, 16)) + 30 >= 60) {
                time = `${Number((element.start_time).slice(11, 13)) + 5}:${Number((element.start_time).slice(14, 16))+30} to ${Number((element.end_time).slice(11, 13)) + 6}:${(Number((element.end_time).slice(14, 16)) + 30)%60}`
            }
            else {
                time = `${Number((element.start_time).slice(11, 13)) + 5}:${Number((element.start_time).slice(14, 16))+30} to ${Number((element.end_time).slice(11, 13)) + 5}:${Number((element.end_time).slice(14, 16)) + 30}`
            }
        }
        let duration = `${Number(element.duration) / 3600} hr: ${Number(element.duration) % 60} min`
        contestDetail.innerHTML += "<div class='segment'><div class='data'><div class='name'> <span>Contest Name: </span>" + name + "</div><div class='url'>Contest Link: <a href='"+ url +" ' target='_blank'>" +"<i>Link for the contest</i>"+"</a>"+"</div><div class='date'>Date: " + date + "</div><div class='time'>Time: " + time + "</div><div class='duration'>Duration: " + duration + "</div></div>"
    })
    console.log(data);
}
const sub = document.querySelector("#submit")
sub.addEventListener("click", () => {
    const contest = document.getElementById("contest");
    const val = contest.value;
    contestDetail.innerHTML = ""
    contestData(val)
})

