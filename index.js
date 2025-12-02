function getPoemById(id)
{
 fetch("https://github.com/anisiceiu/my-poems/poems/"+id+".html")
  .then(response => response.text())
  .then(html => {
      document.getElementById("container-poem").innerHTML = html;
  })
  .catch(err => console.error(err));
}