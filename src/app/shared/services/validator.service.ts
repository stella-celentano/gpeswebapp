import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"
import { GPESWebApi } from "./../../app.api"

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    constructor(
        private http: HttpClient
    ) { }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/sobre/titulo”. A requisição possui um parâmetro obrigatório (title). */
    checkUniqueSobreTitulo(titulo: string) {
        let params = new HttpParams()
        params = params.append('title', titulo)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/sobre/titulo`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/evento/titulo”. A requisição possui um parâmetro obrigatório (title). */
    checkUniqueEventoTitulo(titulo: string) {
        let params = new HttpParams()
        params = params.append('title', titulo)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/evento/titulo`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/contato/nome”. A requisição possui um parâmetro obrigatório (name). */
    checkUniqueContatoNome(nome: string) {
        let params = new HttpParams()
        params = params.append('name', nome)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/contato/nome`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/publicacoes/titulo”. A requisição possui um parâmetro obrigatório (title). */
    checkUniquePublicacaoTitulo(titulo: string) {
        let params = new HttpParams()
        params = params.append('title', titulo)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/publicacoes/titulo`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/categoria/nome". A requisição possui um parâmetro obrigatório (name). */
    checkUniqueCategoriaNome(name: string) {
        let params = new HttpParams()
        params = params.append('name', name)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/categoria/nome`, { params: params })
    }

    checkUniqueIntegranteNome(nome: string) {
        let params = new HttpParams()
        params = params.append('nome', nome)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/integrantes/nome`, { params: params })
    }

    checkUniqueProjetoTitulo(titulo: string){
        let params = new HttpParams()
        params = params.append('titulo', titulo)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/projetos/titulo`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/usuario/nome”. A requisição possui um parâmetro obrigatório (name). */
    checkUniqueUsuarioNome(nome: string) {
        let params = new HttpParams()
        params = params.append('name', nome)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/usuario/nome`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/usuario/usuario”. A requisição possui um parâmetro obrigatório (username). */
    checkUniqueUsuarioUsuario(usuario: string) {
        let params = new HttpParams()
        params = params.append('username', usuario)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/usuario/usuario`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/usuario/email”. A requisição possui um parâmetro obrigatório (email). */
    checkUniqueUsuarioEmail(email: string) {
        let params = new HttpParams()
        params = params.append('email', email)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/usuario/email`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/processo-seletivo/titulo”. A requisição possui um parâmetro obrigatório (title). */
    checkUniqueProcessoSeletivoTitulo(titulo: string) {
        let params = new HttpParams()
        params = params.append('title', titulo)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/processo-seletivo/titulo`, { params: params })
    }

    /**Função que realiza a requisição do tipo POST ao endpoint “/authenticated/validators/unique/categoria/nome". A requisição possui um parâmetro obrigatório (name). */
    checkUniqueAutorNome(name: string) {
        let params = new HttpParams()
        params = params.append('name', name)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/autores/nome`, { params: params })
    }

     /**Função que realiza a requisição do tipo POST ao endpoint “/public/validators/unique/inscricao/nome". A requisição possui um parâmetro obrigatório (name). */
     checkUniqueInscricaoNome(name: string) {
        let params = new HttpParams()
        params = params.append('name', name)
        return this.http.get<any>(`${GPESWebApi}/public/validators/unique/inscricao/nome`, { params: params })
    }

     /**Função que realiza a requisição do tipo POST ao endpoint “/public/validators/unique/inscricao/email". A requisição possui um parâmetro obrigatório (email). */
     checkUniqueInscricaoEmail(email: string) {
        let params = new HttpParams()
        params = params.append('email', email)
        return this.http.get<any>(`${GPESWebApi}/public/validators/unique/inscricao/email`, { params: params })
    }

      /**Função que realiza a requisição do tipo POST ao endpoint “/public/validators/unique/inscricao/ra". A requisição possui um parâmetro obrigatório (ra). */
      checkUniqueInscricaoRa(ra: string) {
        let params = new HttpParams()
        params = params.append('ra', ra)
        return this.http.get<any>(`${GPESWebApi}/public/validators/unique/inscricao/ra`, { params: params })
    }

    checkUniqueSelecaoTitulo(titulo: string) {
        let params = new HttpParams()
        params = params.append('title', titulo)
        return this.http.get<any>(`${GPESWebApi}/authenticated/validators/unique/selecao/titulo`, { params: params })
    }
}