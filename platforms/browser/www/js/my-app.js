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
        path: '/list/',
        url: 'list.html',
      },

      {
        path: '/wedcouple/',
        url: 'Wedcouple.html',
      },

      {
        path: '/entourage/',
        url: 'Entourage.html',
      },

      {
        path: '/sequence/',
        url: 'Sequence.html',
      },

      {
        path: '/clothing/',
        url: 'Clothing.html',
      },

      {
        path: '/location/',
        url: 'Location.html',
      },

      {
        path: '/menu/',
        url: 'Menu.html',
      },
        {
        path: '/test/',
        url: 'test.html',
      },       
      {
        path: '/church/',
        url: 'Church.html',
      },

      {
        path: '/reception/',
        url: 'Reception.html',
      },
        {
        path: '/about/',
        url: 'about.html',
      },
    ],
    // ... other parameters
    theme: 'auto'
  });
  
  var mainView = app.views.create('.view-main');
