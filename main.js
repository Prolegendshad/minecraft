var canvas = new fabric.Canvas('myCanvas');
width = 30;
height = 30;
player_x = 10;
player_y = 10;
var p_object = "";
var b_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        p_object = Img;
p_object.scaleToWidth(150);
p_object.scaleToHeight(140);
p_object.set({
top:player_y,
left:player_x
});
canvas.add(p_object);
});
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        p_object = Img;
b_object.scaleToWidth(block_image_width);
b_object.scaleToHeight(block_image_height);
b_object.set({
top:player_y,
left:player_x
});
canvas.add(b_object);
});
}

window.addEventListener("key down", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if (e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift pressed together");
    block_image_height=block_image_height+10;
    block_image_width=block_image_width+10;
    document.getElementById('current_height').innerHTML=block_image_height;
    document.getElementById('current_width').innerHTML=block_image_width;

}

if (e.shiftKey == true && keyPressed == '77')
{
    console.log("m and shift pressed together");
    block_image_height=block_image_height-10;
    block_image_width=block_image_width-10;
    document.getElementById('current_height').innerHTML=block_image_height;
    document.getElementById('current_width').innerHTML=block_image_width;
    
}

if (keyPressed == '37')
{
    left();
    console.log("left");
}
if (keyPressed == '38')
{
    up();
    console.log("up");
}
if (keyPressed == '39')
{
    right();
    console.log("right");
}
if (keyPressed == '40')
{
    down();
    console.log("down");
}
if (keyPressed == '87')
{
    new_image('wall.jpg');
    console.log("w");
}
if (keyPressed == '71')
{
    new_image('ground.png');
    console.log("g");
}
if (keyPressed == '76')
{
    new_image('light_green.png');
    console.log("l");
}
if (keyPressed == '84')
{
    new_image('trunk.jpg');
    console.log("t");
}
if (keyPressed == '82')
{
    new_image('roof.jpg');
    console.log("r");
}
if (keyPressed == '89')
{
    new_image('yellow_wall.png');
    console.log("y");
}
if (keyPressed == '68')
{
    new_image('dark_green.png');
    console.log("d");
}
if (keyPressed == '85')
{
    new_image('unique.png');
    console.log("u");
}
if (keyPressed == '67')
{
    new_image('cloud.jpg');
    console.log("c");
}

}
function up(){
if(player_y=>0) {
     player_y = player_y-height;
     console.log("image height"+ height);
    console.log("when up arrow is pressed,x="+player_x+",y="+player_y);
    canvas.remove(p_object);
    player_update();
}
}
function down(){
    if(player_y<=500) {
         player_y = player_y + height;
         console.log("image height"+height);
        console.log("when down arrow is pressed,x="+player_x+",y="+player_y);
        canvas.remove(p_object);
        player_update();
    }
}
function right(){
        if(player_x<=900) {
             player_x = player_x + width;
             console.log("image width"+width);
            console.log("when right arrow is pressed,x=" + player_x + ",y=" + player_y);
            canvas.remove(p_object);
            player_update();
        }
}
function left(){
    if(player_x > 0) {
         player_x = player_x - width;
         console.log("image width"+ width);
        console.log("when left arrow is pressed,x=" + player_x + ",y=" + player_y);
        canvas.remove(p_object);
        player_update();
    }
    }