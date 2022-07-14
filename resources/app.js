const menu = () => {
  const e = document.getElementById('nav-menu')
  if (e.className === "wide-menu") {
    e.className = "narrow-menu"
  } else {
    e.className = "wide-menu"
  }
}