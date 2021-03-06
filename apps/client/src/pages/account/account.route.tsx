import { defineRoute } from '@/services/routing';

export type AccountRouteParams = {
  accountId: string;
};

export const accountRoute = defineRoute({
  path: '/account/:accountId',
  element: () => import('./account').then((module) => <module.Account />),
  createPath: (accountId: number) => `/account/${accountId}`,
});
