var navbar = document.getElementById('navbar');

window.onscroll = function()
{
  if(pageYOffset > 100)
  {
    navbar.classList.remove('top');
  }
  else
  {
    navbar.classList.add('top');
  }
}