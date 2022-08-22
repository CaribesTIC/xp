export default {
  title: 'eXtreme Programming',
  description: 'eXtreme Programming',
  base: '/xp/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },      
      { text: 'Comenzar', link: '/start/intro' },
      { text: 'CaribesTIC', link: 'https://caribestic.github.io/' },
      { text: 'GitHub', link: 'https://github.com/CaribesTIC/xp' }      
    ],
    sidebar: [
      {
        text: 'Comenzar',   // required
        path: '/start/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Introducción', link: '/start/intro' },                              
        ]
        }
        ,{
        text: '5 Valores',        
        path: '/values/',      // optional, link of the title, which should be an absolute path and must exist        
        collapsible: true,
        collapsed: true, 
        items: [          
          { text: 'Valores XP', link: '/values/intro' },
          { text: '1. Comunicación', link: '/values/communication' },
          { text: '2. Simplicidad', link: '/values/simplicity' },
          { text: '3. Retroalimentación', link: '/values/feedback' },
          { text: '4. Respeto', link: '/values/respect' },
          { text: '5. Corage', link: '/values/courage' },
          { text: 'Entorno de Trabajo', link: '/values/environment' }
        ]
      },{
        text: '12 Prácticas',
        path: '/practices/',
        collapsible: true,
        collapsed: true,      
        items: [
          { text: 'Garantías de resultados', link: '/practices/intro' },
          { text: '1. La Planificación', link: '/practices/planning' },
          { text: '2. Versiones Pequeñas', link: '/practices/short-releases' },
          { text: '3. Sistema Metafórico', link: '/practices/metaphorical-system' },
          { text: '4. Diseño Simple', link: '/practices/simple-design' },
          { text: '5. Pruebas Continuas', link: '/practices/continuous-tests' },
          { text: '6. Refactorización', link: '/practices/refactoring' },
          { text: '7. Programación en Parejas', link: '/practices/pair-programming' },
          { text: '8. Propiedad Colectiva', link: '/practices/collective-ownership' },
          { text: '9. Integración Continua', link: '/practices/continuous-integration' },
          { text: '10. Semanas de 40 Horas', link: '/practices/40-hour-week' },
          { text: '11. Cliente en su Sitio', link: '/practices/on-site-customer' },
          { text: '12. Estándares de Codificación', link: '/practices/coding-standards' }
        ]
      }
    ]
  }
}
