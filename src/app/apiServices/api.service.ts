import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

const LNGS = {
  en : 'en',
  ar : 'ar'
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://backend.q3seo.com/books/public/api/';
  defaultLng;
  constructor(private httpClient : HttpClient ,private translateService : TranslateService )   {
    this.defaultLng = this.translateService.defaultLang
   }

  async getSlider() {
    
    let data = (<any> await this.httpClient.get(`${this.url}slider/getAll?all=yes`).toPromise()).data;

    return data.map(ele=>{
      return {
        image : ele.image ,
        caption : this.defaultLng == LNGS.en ? ele.caption : ele.captionAr
      }
    });
  }
  async getAboutUs(){
    let data = (<any> await this.httpClient.get(`${this.url}about-us/getAll?all=yes`).toPromise()).data;

    return data.map(ele=>{
      return {
        header : this.defaultLng == LNGS.en ? ele.header : ele.headerAr ,
        content : this.defaultLng == LNGS.en ? ele.content : ele.contentAr
      }
    });
  }

  async getServices(){
    let data = (<any> await this.httpClient.get(`${this.url}service/getAll?all=yes`).toPromise()).data;

    return data.map(ele=>{
      return {
        image : ele.image,
        caption : this.defaultLng == LNGS.en ? ele.caption : ele.captionAr,
        name : this.defaultLng == LNGS.en ? ele.name : ele.nameAr
      }
    });
  }

  async getFaqs(){
    let data = (<any> await this.httpClient.get(`${this.url}faq/getAll?all=yes`).toPromise()).data;

    return data.map(ele=>{
      return {
        header : this.defaultLng == LNGS.en ? ele.header : ele.headerAr ,
        content : this.defaultLng == LNGS.en ? ele.content : ele.contentAr
      }
    });
  }
  async getShop(){

  }
  async getExtras(){
    let data = (<any> await this.httpClient.get(`${this.url}extras/getAll?all=yes`).toPromise()).data;

    return data.map(ele=>{
      return ele
    });
  }
  async getCategories(){

  }
  async getOrders(){

  }
  async Purchase(){
    
  }
  async order(){

  }

  async login(){

  }

  async register(){

  }


}
