class car {


    constructor(){

    }

getCount() {
    var carCountRef = database.ref('carCount');
    carCountRef.on("value",function(data){
        carCount = data.var();
    }
)
}

updateCount(count)
{
    database.ref('/').update({
        carCount:count
    })
    

}
update(name){
    varCarIndex = "car"+carCount;
    database.ref(carIndex).set({
        name:name
    })

}
}
