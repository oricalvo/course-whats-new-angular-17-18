export type RedirectFunction = (
    redirectData: Pick<
        ActivatedRouteSnapshot,
        'routeConfig' | 'url' | 'params' | 'queryParams' | 'fragment' | 'data' | 'outlet' | 'title'
    >,
) => string | UrlTree;

export interface Route {
    redirectTo?: string | RedirectFunction;
}

export interface Route {
    redirectTo?: string;
}
