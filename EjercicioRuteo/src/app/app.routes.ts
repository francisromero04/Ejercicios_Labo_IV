import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "bienvenida",
        loadComponent: () => import("./bienvenido/bienvenido.component"), //al momento de cargar el componente/ruta, se importa
    },
    {
        path: "registro",
        loadComponent: () => import("./registro/registro.component"),
    },
    {
        path: "login",
        loadComponent: () => import("./login/login.component"), 
    },
    {
        path:"",
        //loadComponent: () => import("./bienvenido/bienvenido.component"),
        loadComponent: () => import("./registro/registro.component"), 
    },
    {
        path: "error", 
        loadComponent: () => import("./error/error.component"),
    },
    {
        path: "**", //¿estoy en cualquier ruta?
        loadComponent: () => import("./error/error.component"),
    }
];
