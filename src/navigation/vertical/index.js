export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Second Page',
    route: 'second-page',
    icon: 'FileIcon',
  },
  {
    title: 'Register',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Vessel',
        route: 'register-vessel',
        icon: 'CircleIcon',
      },
      {
        title: 'Company',
        route: 'register-company',
        icon: 'CircleIcon',
      },
    ]
  },
]
