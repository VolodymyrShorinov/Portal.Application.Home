import {
    PORTAL_SHELL_DEFAULT_MENU_GROUP,
    PortalShellConfig,
  } from '@3shapeinternal/portal-shell-ang';
  
  export const PORTAL_SHELL_APP_CONFIG: PortalShellConfig = {
    pageModel: {
      primaryMenuGroups: [
        {
          id: 'caseManagement',
          label: 'Case Management',
          items: [
            {
              id: 'homePage',
              route: '',
              view: {
                label: 'Home',
                icon: 'home',
                primaryOrder: 1,
              },
            },
            {
              id: 'patients',
              route: 'patients',
              view: {
                label: 'Patients',
                icon: 'patient',
                primaryOrder: 2,
              },
            },
            {
              id: 'cases',
              route: 'cases',
              view: {
                label: 'Cases',
                icon: 'cases',
                primaryOrder: 3,
              },
            },
            {
              id: 'assets',
              route: 'assets',
              view: {
                label: 'Assets',
                icon: 'tooth',
                primaryOrder: 4,
              },
            },
            {
              id: 'billing',
              route: 'billing',
              view: {
                label: 'Billing',
                icon: 'receipt_long',
              },
            },
          ],
        },
      ],
      secondaryMenuGroup: PORTAL_SHELL_DEFAULT_MENU_GROUP,
      portalApps: [
        {
          link: '',
          title: 'Some App',
        },
      ],
    },
    api: {
      loginUrl: '',
    },
    activeApp: {
      name: 'Active App',
    },
  };
  