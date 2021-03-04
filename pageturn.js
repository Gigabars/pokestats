var page = 0;
function finish()
{
    var type1out = document.querySelector("#type1box").style.display="none";
    var type2out = document.querySelector("#type2box").style.display="none";
}
function pageturn()
{
page = page + 1;
switch(page) {
case 1:
    var name = document.querySelector("#namebox");
    name = name.value;
    document.getElementById('namebox').style.display='none';
break;
case 2:
    type1out = document.querySelector("#type1box").value;
alert(type1out);
break;
case 3:


break;
}
}
