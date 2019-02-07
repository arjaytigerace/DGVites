var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/adobo/',
        url: 'adobo.html',
      },
      {
        path: '/afritada/',
        url: 'afritada.html',
      },
      {
        path: '/bulalo/',
        url: 'bulalo.html',
      },
      {
        path: '/kinilaw/',
        url: 'kinilaw.html',
      },
      {
        path: '/sisig/',
        url: 'sisig.html',
      },
      {
        path: '/tinola/',
        url: 'tinola.html',
      },
      {
        path: '/directions/',
        url: 'directions.html',
      },
      {
        path: '/menu/',
        url: 'menu.html',
      },

    ],
    // ... other parameters
    theme:"auto"
  });
  
  var mainView = app.views.create('.view-main');