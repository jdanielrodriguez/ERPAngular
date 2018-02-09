import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

import { path } from "../../../config.module";

import "rxjs/add/operator/toPromise";

@Injectable()
export class EstadisticasService {

	headers = new Headers({'Access-Control-Allow-Origin':'*',
  'cache-control':'no-cache',
  'server':'Apache/2.4.18 (Ubuntu)',
  'x-ratelimit-limit':'60',
  'x-ratelimit-remaining':'59'})
private basePath:string = path.path

constructor(private http:Http){

}

private handleError(error:any):Promise<any> {
console.error("ha ocurrido un error")
console.log(error)
return Promise.reject(error.message || error)
}

    getBarVendedores(form):Promise<any> {
    let url = `${this.basePath}/api/vendedores/estadistica/barra?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

    getBarClientes(form):Promise<any> {
    let url = `${this.basePath}/api/clientes/estadistica/barra?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

    getBarVentas(form):Promise<any> {
    let url = `${this.basePath}/api/ventas/estadistica/barra?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

    getBarFlujo(form):Promise<any> {
    let url = `${this.basePath}/api/flujo/estadistica/barra?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

    getPieFlujo(form):Promise<any> {
    let url = `${this.basePath}/api/flujo/estadistica/pie?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

    getPieVentas(form):Promise<any> {
    let url = `${this.basePath}/api/ventas/estadistica/pie?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

    getPieClientes(form):Promise<any> {
    let url = `${this.basePath}/api/clientes/estadistica/pie?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

    getPieVendedores(form):Promise<any> {
    let url = `${this.basePath}/api/vendedores/estadistica/pie?fechaInicio=${form.fechaInicio}&fechaFin=${form.fechaFin}`
      return this.http.get(url)
                      .toPromise()
                        .then(response => {
                          //console.log(response.json())
                          return response.json()
                        })
                        .catch(this.handleError)
    }

}
