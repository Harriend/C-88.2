var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var playerObject = "";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(144);
        playerObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        blockImgObject = Img;

        blockImgObject.scaleToWidth(block_image_width);
        blockImgObject.scaleToHeight(block_image_height);
        blockImgObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockImgObject);
    });
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == '80'){
        block_image_width += 10;
        block_image_height += 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        block_image_width -= 10;
        block_image_height -= 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
}

if(keyPressed == "38"){
    up();
}

if(keyPressed == "40"){
    down();
}

if(keyPressed == "37"){
    left();
}

if(keyPressed == "39"){
    right();
}

if(keyPressed == "87"){
    new_image("wall.jpg");
}

if(keyPressed == "71"){
    new_image("ground.png");
}

if(keyPressed == "84"){
    new_image("trunk.jpg");
}

if(keyPressed == "82"){
    new_image("roof.jpg");
}

if(keyPressed == "89"){
    new_image("yellow_wall.png");
}

if(keyPressed == "68"){
    new_image("dark_green.png");
}

if(keyPressed == "85"){
    new_image("different.ong");
}

if(keyPressed == "67"){
    new_image("cloud.jpg");
}

}

function up(){
    if(player_y >=0){
        player_y -= block_image_height;
        canvas.remove(playerObject);
        player_update();

    }
}

function down(){
    if(player_y <=600){
        player_y += block_image_height;
        canvas.remove(playerObject);
        player_update();

    }
}

function left(){
    if(player_x >=0){
        player_x -= block_image_height;
        canvas.remove(playerObject);
        player_update();

    }
}

function right(){
    if(player_x <=1000){
        player_x += block_image_height;
        canvas.remove(playerObject);
        player_update();

    }
}