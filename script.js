var data=["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
const object={
  a:2,b:2,c:2,d:3,e:3,
  f:3,g:4,h:4,i:4,j:5,
  k:5,l:5,m:6,n:6,o:6,
  p:7,q:7,r:7,s:7,t:8,
  u:8,v:8,w:9,x:9,y:9,
  z:9
};
function execute(searchbox){
  const boxes= document.getElementById("list2");
  var allPosibleNames=[];
  for(var i=0;i<searchbox.length;i++){
    var str=data[searchbox[i]-2]
    for(var j=0;j<str.length;j++){
      boxes.innerHTML=str[j];
    }
  }
}
function decode(textvalue){
  var converted="";
  for(var j=0;j<textvalue.length;j++){
    if(object[textvalue[j]]){
      converted+=object[textvalue[j]];
    }else{
      converted+=" ";
    }

  }
  // console.log(converted);
  return converted;

}
const search= ()=>{
  const searchbox=document.getElementById("input").value.toLowerCase();
  // execute(searchbox);
  const storeitems= document.getElementById("list");
  const allNames=document.querySelectorAll(".names");
  const names=document.getElementsByTagName('p');

  for(var i=0;i<names.length;i++){
    let match=allNames[i].getElementsByTagName('p')[0];
    // window.alert(match.valu);
    if(match){
      let textvalue =  match.textContent ;
      textvalue=textvalue.toLowerCase();
      var converted=decode(textvalue);
      console.log(converted);
      if(converted.indexOf(searchbox)>-1){
        allNames[i].style.display="";
      }else{
        // window.alert("one");
        allNames[i].style.display="none";
      }
    }
  }
}
function save(){
  const val=document.getElementById('new').value;
  const divBox= document.getElementById("list");
  divBox.innerHTML+="<h3 class='names' value='ch'><p>"+val+"</p></h3>";
}
const node = document.getElementById("new");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Do work
        save();
    }
});
