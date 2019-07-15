import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUser(){
    // return this.http.get('http://localhost/Angular/uzbizz1/src/assets/api/datagetter.php');
    return this.http.get('http://understandable-blin.hostingerapp.com/uzbizz2/assets/api/datagetter.php');
  }

  getDropItems(){
    // return this.http.get('http://localhost/Angular/uzbizz1/src/assets/api/datagetter.php');
    return this.http.get('http://understandable-blin.hostingerapp.com/uzbizz2/assets/api/getDropItem.php');
  }

  enrollEmail(data: Object){
    let httpParams = new HttpParams()
    .append("name", data['name'])
    .append("email", data['mail'])
    .append("phone", data['phone'])
    .append("message", data['message'])
    .append("Purpose", data['Purpose'])
    .append("Translator", data['Translator'])
    .append("Education", data['Education'])
    .append("Sell", data['Sell'])
    .append("Guide", data['Guide'])
    .append("Buy", data['Buy']);
     return this.http.post('http://understandable-blin.hostingerapp.com/uzbizz2/assets/api/emailenroll.php', httpParams);
    //  return this.http.post('http://localhost/Angular/uzbizz1/src/assets/api/emailenroll.php', httpParams);
  }

  enrollSub(data: Object){
    let httpParams = new HttpParams()
    .append("name", data['name'])
    .append("email", data['email'])
    .append("phone", data['phone'])
    .append("terms", data['terms'])
    .append("news", data['news'])
    .append("Translator", data['Translator'])
    .append("Education", data['Education'])
    .append("Sell", data['Sell'])
    .append("Guide", data['Guide'])
    .append("Buy", data['Buy']);
     return this.http.post('http://understandable-blin.hostingerapp.com/uzbizz2/assets/api/enrollsubscribe.php', httpParams);
    // return this.http.post('http://localhost/Angular/uzbizz1/src/assets/api/enrollsubscribe.php', httpParams);
  }

  scroll(el: any) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  croll(el: any) {
    // el.scrollIntoView({behavior: 'smooth'});
  }

  getImage(page: any){
    let httpParams = new HttpParams()
    .append("page", page)
    // return this.http.post('http://localhost/Angular/uzbizz1/src/assets/api/getimage.php', httpParams);
    return this.http.post('http://understandable-blin.hostingerapp.com/uzbizz2/assets/api/getimage.php', httpParams);
  }
}
