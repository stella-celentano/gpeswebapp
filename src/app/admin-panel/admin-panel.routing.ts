import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AuthGuard } from "./../shared/guards/auth.guard"
import { AnalyticsComponent } from "./analytics/analytics.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: '/admin/analytics', pathMatch: 'full' },
            { path: 'auth', loadChildren: './authentication/authentication.module#AuthModule' },
            {
                path: 'publicacoes', loadChildren: './publicacoes/publicacoes.module#PublicacoesModule', canActivate: [AuthGuard]
            },
            {
                path: 'sobre', loadChildren: './sobre/sobre.module#SobreModule', canActivate: [AuthGuard]
            },
            {
                path: 'eventos', loadChildren: './eventos/evento.module#EventoModule', canActivate: [AuthGuard]
            },
            {
                path: 'contato', loadChildren: './contato/contato.module#ContatoModule', canActivate: [AuthGuard]
            },
            {
                path: 'usuario', loadChildren: './usuarios/usuario.module#UsuarioModule', canActivate: [AuthGuard]
            },
            {
                path: 'processo-seletivo', loadChildren: './processo-seletivo/processo-seletivo.module#ProcessoSeletivoModule', canActivate: [AuthGuard]
            },
            {
                path: 'integrantes', loadChildren: './integrantes/integrantes.module#IntegrantesModule', canActivate: [AuthGuard]
            },
            {
                path: 'projetos', loadChildren: './projetos/projetos.module#ProjetosModule', canActivate: [AuthGuard]
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(AdminPanelRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminPanelRoutingModule { }