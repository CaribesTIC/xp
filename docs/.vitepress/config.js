export default {
  title: 'Vue-Form',
  description: 'Vue Form.',
  base: '/vue-forms/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },      
      { text: 'Tutorial', link: '/tuto/introduction' },
      { text: 'CaribesTIC', link: 'https://caribestic.github.io/' },
      { text: 'GitHub', link: 'https://github.com/CaribesTIC/vue-forms' }      
    ],
    sidebar: [
      {
        text: 'Comenzar',   // required
        path: '/tuto/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Introducción', link: '/tuto/introduction' },                              
        ]
        }
        ,{
        text: '5 Valores',        
        path: '/tuto/',      // optional, link of the title, which should be an absolute path and must exist        
        collapsible: true,
        collapsed: false, 
        items: [          
          { text: 'Valores XP', link: '/tuto/values' },
          { text: '1. Comunicación', link: '/tuto/communication' },
          { text: '2. Simplicidad', link: '/tuto/simplicity' },
          { text: '3. Retroalimentación', link: '/tuto/feedback' },
          { text: '4. Respeto', link: '/tuto/respect' },
          { text: '5. Corage', link: '/tuto/courage' },
          { text: 'Entorno de Trabajo', link: '/tuto/environment' }           
        ]
      },{
        text: '12 Prácticas',
        path: '/bonus/',
        collapsible: true,
        collapsed: false,      
        items: [
          { text: 'Prácticas que garantizan resultados', link: '/bonus/testing-codes' },
        ]
      }
    ]
  }
}
