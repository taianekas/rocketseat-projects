export class Router {
  routes = {}

  add(routeName,  page) {
    this.routes[routeName] = page
  }

  route(event)  {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, '', event.target)
  
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    fetch(route)
    .then((data) => {
      return data.text()
    })
    .then((html) =>  {
      document.querySelector('#app').innerHTML = html
    })

    pathname == "/" ? document.body.style.backgroundImage = "url('../assets/mountains-universe-1.png')" : "url(/404.html)"
    pathname == "/universe" ? document.body.style.backgroundImage = "url('../assets/mountains-universe-2.png')" : "url(/404.html)"
    pathname == "/exploration" ? document.body.style.backgroundImage = "url('../assets/mountains-universe-3.png')" : "url(/404.html)"
    
  }
}