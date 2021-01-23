class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1');
        title.html("car Racing Game");
        title.position (250,50);

        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');
        greeting.position(250,150);

        input.position(250,250);
        button.position(250,300);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1; // x = x+1 =>  ... x += 1
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);

        })


    }
}