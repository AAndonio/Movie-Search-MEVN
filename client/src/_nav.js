export default {
  items: [
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
      }
    },
    {
      name: 'Colore',
      children: [
        {
          name: 'A Colori',
        },
        {
          name: 'Bianco e nero',
        },
      ]
    },
    {
      name: 'Anni',
      children: [
        {
          name: 'anno',
        },
      ]
    },
    {
      name: 'Durata',
      children: [
        {
          name: 'durata',
        },
      ]
    },
    {
      name: 'Bollino',
      children: [
        {
          name: 'Bollino 1',
        },
        {
          name: 'Bollino 2',
        },
        {
          name: 'Bollino 3',
        },
      ]
    },
    {
      name: 'Genere',
      children: [
        {
          name: 'Genere 1',
        },
        {
          name: 'Genere 2',
        },
        {
          name: 'Genere 3',
        },
      ]
    },
    {
      title: true,
      name: 'Cast',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Nome Regista',
      children: [
        {
          name: 'Regista',
          icon: 'icon-star'
        },
      ]
    },
    {
      name: 'Nome Attore',
      children: [
        {
          name: 'Attore 1',
          icon: 'icon-star'
        },
        {
          name: 'Attore 2',
          icon: 'icon-star'
        },
        {
          name: 'Attore 3',
          icon: 'icon-star'
        },
      ]
    },
    {
      title: true,
      name: 'Profitti',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Budget',
      children: [
        {
          name: 'budget',
        },
      ]
    },
    {
      name: 'Nome Incasso',
      children: [
        {
          name: 'incasso',
        },
      ]
    },
    {
      name: 'Numero Critiche',
      children: [
        {
          name: 'num critiche',
        },
      ]
    },
    {
      name: 'Voto',
      children: [
        {
          name: 'voto',
        },
      ]
    },


    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navbars',
          url: '/base/navbars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/base/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    }
  ]
}
