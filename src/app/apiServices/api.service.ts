import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

const LNGS = {
  en: 'en',
  ar: 'ar'
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://backend.q3seo.com/books/public/api/';
  defaultLng;
  constructor(private httpClient: HttpClient, private translateService: TranslateService) {
    this.defaultLng = localStorage.getItem('lng')
  }

  async getSlider() {

    let data = (<any>await this.httpClient.get(`${this.url}slider/getAll?all=yes`).toPromise()).data;

    return data.map(ele => {
      return {
        id: ele.id,

        image: ele.image,
        caption: this.defaultLng == LNGS.en ? ele.caption : ele.captionAr
      }
    });
  }
  async getAboutUs() {
    let data = (<any>await this.httpClient.get(`${this.url}about-us/getAll?all=yes`).toPromise()).data;

    return data.map(ele => {
      return {
        id: ele.id,

        header: this.defaultLng == LNGS.en ? ele.header : ele.headerAr,
        content: this.defaultLng == LNGS.en ? ele.content : ele.contentAr
      }
    });
  }

  async getServices() {
    let data = (<any>await this.httpClient.get(`${this.url}service/getAll?all=yes`).toPromise()).data;

    return data.map(ele => {
      return {
        id: ele.id,

        image: ele.image,
        caption: this.defaultLng == LNGS.en ? ele.caption : ele.captionAr,
        name: this.defaultLng == LNGS.en ? ele.name : ele.nameAr
      }
    });
  }

  async getFaqs() {
    let data = (<any>await this.httpClient.get(`${this.url}faq/getAll?all=yes`).toPromise()).data;

    return data.map(ele => {
      return {
        id: ele.id,

        header: this.defaultLng == LNGS.en ? ele.header : ele.headerAr,
        content: this.defaultLng == LNGS.en ? ele.content : ele.contentAr
      }
    });
  }
  async getShop() {
    let data = (<any>await this.httpClient.get(`${this.url}item/getAll?all=yes`).toPromise()).data;

    return data.map(ele => {
      return {
        name: this.defaultLng == LNGS.en ? ele.name : ele.nameAr,
        description: this.defaultLng == LNGS.en ? ele.description : ele.descriptionAr,
        price: ele.price,
        id: ele.id
      }
    });
  }
  async getExtras() {
    let data = (<any>await this.httpClient.get(`${this.url}extras/getAll?all=yes`).toPromise()).data;

    return data.map(ele => {
      return {
        name: this.defaultLng == LNGS.en ? ele.name : ele.nameAr,
        price: ele.price,
        id : ele.data ? JSON.parse((ele.data)).id : ''
      }
    });
  }
  async getCategories() {
    let data = (<any>await this.httpClient.get(`${this.url}category/getAll?all=yes`).toPromise()).data;

    return data.map(ele => {
      return {
        id: ele.id,
        name: this.defaultLng == LNGS.en ? ele.name : ele.nameAr,
        data : ele.data ? Object.keys(JSON.parse(ele.data))[0] : ''
      }
    });
  }
  async getOrders() {
    let data = (<any>await this.httpClient.get(`${this.url}users/orders?all=yes`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).toPromise()).data;

    return data.map(ele => {
      return ele
    })
  }
  async Purchase(params: { amount: number }) {
    let data = (<any>await this.httpClient.post(`${this.url}users/purchase`, params, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).toPromise());

    return data
  }
  async transactions() {
    let data = (<any>await this.httpClient.get(`${this.url}users/transactions?all=yes`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).toPromise());

    return data.map(ele => {
      return ele
    })   }

  async tickets() {
    let data = (<any>await this.httpClient.get(`${this.url}tickets/userTickets?all=yes`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).toPromise());

    return data.map(ele => {
      return ele
    })  }
  async order(params: {
    "comment": string,
    "itemId": number,
    "totalAmount": number,
    "extras": number[],
    "links": string[],
    "keywords": string[],
    "article": string,
    "quantity": number
  }) {
    let data = (<any>await this.httpClient.post(`${this.url}order/create`, params, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).toPromise());

    return data
  }

  async login(params: {
    email: string,
    password: string
  }) {
    let data = (<any>await this.httpClient.post(`${this.url}users/login`, params).toPromise());
    localStorage.setItem('user', JSON.stringify(data.user[0]));
    localStorage.setItem('token', data.token);
  }

  async register(params: {
    email: string,
    password: string,
    name
  }) {
    let data = (<any>await this.httpClient.post(`${this.url}users/register`, params).toPromise());

    localStorage.setItem('user', JSON.stringify(data.user[0]));
    localStorage.setItem('token', data.token);
  }

  async contact(params: {
    'name': string,
    'phone': number,
    "mail": string,
    "message": string

  }) {
    let data = (<any>await this.httpClient.post(`${this.url}contact-us/create`, params).toPromise());
    return data;
  }


}
