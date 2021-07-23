menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"
                    ];
custom_topping_array=[]                    

function getmenu(){
var htmldata;
htmldata="<ol class='menu_list'>"

menu_list_array.sort();

for( var i=0;i<menu_list_array.length;i++)
{
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML= htmldata;
}


function add_item(){
var htmldata;
var item = document.getElementById("")
menu_list_array.sort();

htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++)
{
    htmldata=htmldata+"<div class='card'>"
    +"<img src='images/pizzaImg.png'>"+ menu_list_array[i]
    +"</div>"
}
htmldata=htmldata+"</section>";

document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top()
{
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
alert("New Pizza "+ item + " has been added to our Menu. Thank You !! ");
}

function create_pizza()
{
var topping1=document.getElementById("topping1").value;
var topping2=document.getElementById("topping2").value;
var topping3=document.getElementById("topping3").value;

custom_topping_array.push(topping1);

custom_topping_array.push(topping2);

custom_topping_array.push(topping3);

var htmldata=
"<div><img src='images/pizzaImg.png'></img>" +
"<h4>Here is your custom topping Pizza</h4>"
 + "<h4> Custom Toppings added : </h4>" 
 +  "<ol>";
for(var i=0;i<custom_topping_array.length;i++)
{
    htmldata = htmldata + '<li>' + custom_topping_array[i] + '</li>'
}
htmldata = htmldata + "</ol></div>"
           

document.getElementById("custom_pizza").innerHTML= htmldata;

}
