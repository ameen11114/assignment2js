


var quotes = [

{q:"“Be yourself; everyone else is already taken.”" , a:"― Oscar Wilde"},
{q:"“So many books, so little time.”" , a:"― Frank Zappa"},
{q:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , a:"― Albert Einstein"},
{q:"“Be the change that you wish to see in the world.”" , a:"― Mahatma Gandhi"}

]

 

function btn(){
    var rand = Math.floor(Math.random() * 4);

document.getElementById("quote").innerHTML = quotes[rand].q
document.getElementById("author").innerHTML =  quotes[rand].a

}