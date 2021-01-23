class Player{
    constructor(){

    }

    getCount(){
        var pcref = database.ref('playerCount')
        pcref.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
        playerCount:count
        });
    }

    update(name) {
        var playerIndex = "player" + playerCount;//player1 or player2 or player3 or player4
        database.ref(playerIndex).set({
            name : name
        })
    }

}