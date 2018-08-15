
(() => {
    var returnArray = [];
    const result = function (myList, myCompareVal) {
        return myList.filter(part => part[0].type == myCompareVal);
    }
    array.forEach(x => {
        console.log('x: ', x);
        console.log(result(participantList, x));
        returnArray.push(result(participantList, x))
    });
    console.log('returnArray: ',returnArray)
})();
