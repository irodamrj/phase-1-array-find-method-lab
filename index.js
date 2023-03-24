// code your solution here
function superbowlWin(record){
    const winObject =  record.find(item => item.result === "W");
    if(winObject != undefined )
        return winObject.year;
    return winObject;
}
