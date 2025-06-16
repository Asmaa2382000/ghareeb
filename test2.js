var siteName = document.getElementById('sitename');
var siteUrl = document.getElementById('siteurl');

var sites =[];

if(localStorage.getItem('all') != null)
{
  sites = JSON.parse(localStorage.getItem('all'));
  display();
}
function Create()
{
  
var site=
{
    siteName : siteName.value,
    siteUrl : siteUrl.value,
}
console.log(siteName)
sites.push(site);
   Swal.fire({
    
  title: "Added Successfuly!",
  icon: "success",
  draggable: true
}); 

Clear();
display();

localStorage.setItem("all",JSON.stringify(sites));


}
function display()
{
    var cartoona=" ";
for(var i =0 ;i<sites.length;i++)
{
    cartoona += 
    `
    <tr>
    <td>${i+1}</td>
    <td> ${sites[i].siteName}</td>
    <td> <button class= "btn btn-success" onclick = "window.open('${sites[i].siteUrl}')"> <i class="fa-solid fa-eye" ></i> Visit</button></td>
    <td> <button class= "btn btn-danger" onclick="deleteSite(${i})"> <i class="fa-regular fa-trash-can"></i> Delete</button></td>
    </tr>
    `
    document.getElementById("tableContent").innerHTML=cartoona;
}

}

function Clear()
{
    siteName.value=" ";
    siteUrl.value=" ";
  
}
function deleteSite(index)
{
sites.splice(index,1);
display();
localStorage.setItem('all',JSON.stringify(sites));

}
function visit(i)
{
var x = sites[i].siteUrl;


}
