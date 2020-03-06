module.exports.dateTime = (time) => {
    let date = new Date(time);
    let year = date.getFullYear();
    let month =
        date.getMonth() + 1 >= 10 ? date.getMonth() : "0" + date.getMonth();
    let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    let h = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
    let m =
        date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    let s =
        date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
    return `${year}-${month}-${day} ${h}:${m}:${s}`;
}