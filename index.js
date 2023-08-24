var name1=prompt("enter your name:");
var name2=prompt("enter your name:");

var num=Math.ceil(Math.random()*6);
var numImg="dice"+num+".png";
var numImgSrc="images/"+numImg;
document.querySelector(".img1").setAttribute("src",numImgSrc);


var num2=Math.ceil(Math.random()*6);
var num2Img="dice"+num2+".png";
var num2ImgSrc="images/"+num2Img;
document.querySelector(".img2 ").setAttribute("src",num2ImgSrc);


if(num>num2)
{
    document.querySelector(".heading").innerHTML=name1+" WINS";

}
else if(num2>num)
{
    document.querySelector(".heading").innerHTML=name2+" WINS";
}
else
{
    document.querySelector(".heading").innerHTML="both "+name1+" and "+name2+ "wins";
}
