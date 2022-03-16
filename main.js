var me = "";
var lx,ly;
var width = screen.width;

new_width = screen.width -70;
new_height = screen.height-300;
canvas=document.getElementById("c1");
ctx=canvas.getContext("2d");

if(width<992)
{
    document.getElementById("c1").width=new_width;
    document.getElementById("c1").height=new_height;
    document.body.style.overflow="hidden";
}


color="black";
wol=2;
bcolor="red";

canvas.addEventListener("mousedown",mm);

function mm(e)
{
    color=document.getElementById("i1").value;
    wol=document.getElementById("i2").value;
    bcolor=document.getElementById("i3").value;
    document.getElementById("c1").style.backgroundColor=bcolor;

    me="mouseDown";

}

canvas.addEventListener("touchstart",ts);

function ts(e)
{
    color=document.getElementById("i1").value;
    wol=document.getElementById("i2").value;
    bcolor=document.getElementById("i3").value;
    document.getElementById("c1").style.backgroundColor=bcolor;
    lx = e.touches[0].clientX - canvas.offsetLeft; 
    ly = e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("mousemove",mv);

function mv(e)
{
    cx = e.clientX - canvas.offsetLeft; 
    cy = e.clientY - canvas.offsetTop;
    if(me=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wol;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }
    lx=cx;
    ly=cy;
}


canvas.addEventListener("touchmove",tv);

function tv(e)
{
    cx = e.touches[0].clientX - canvas.offsetLeft; 
    cy = e.touches[0].clientY - canvas.offsetTop; 
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wol;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();

    lx=cx;
    ly=cy;
}



function ca() 
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}
