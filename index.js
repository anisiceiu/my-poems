function getPoemById(id)
{
 fetch("https://raw.githubusercontent.com/anisiceiu/my-poems/main/poems/"+id+".html")
  .then(response => response.text())
  .then(html => {
      document.getElementById("container-poem").innerHTML = html;
  })
  .catch(err => console.error(err));
}