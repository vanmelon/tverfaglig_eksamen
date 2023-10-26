/** fårstår ikke åsen dette fungerer men jeg prøvde */

const userhovedTemplate = document.querySelector("[data-user-template]")
const userhovedContainer = document.querySelector("[data-user-hoveds-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("index.html")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const hoved = userhovedTemplate.content.cloneNode(true).children[0]
      const header = hoved.querySelector("[data-header]")
      const body = hoved.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userhovedContainer.append(hoved)
      return { name: user.name, email: user.email, element: hoved }
    })
  })
