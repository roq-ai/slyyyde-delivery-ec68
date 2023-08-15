const mapping: Record<string, string> = {
  products: 'product',
  purchases: 'purchase',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
