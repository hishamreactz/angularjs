import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import  'rxjs/add/operator/map';

import { Headers, RequestOptions } from '@angular/http';

import { User } from '../model/user';



@Injectable()
export class DataService {

  constructor(private http:Http) {


      console.log('DataService connected');

  }

getPosts(){

  return this.http.get('http://test.dev/api/books').map(res => res.json());
}



deletePost(id){

  return this.http.delete('http://test.dev/api/books/'+id).map(res => res.json());
}



updateBook(book, data):Observable<any>{
    let headers = new Headers({'Accept':'application/json', 'Content-Type': 'application/json', });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://test.dev/api/books/'+book.id, data, options)
                        .map(res => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


}




editBook(id){

  return this.http.get('http://test.dev/api/books/'+id+'/edit').map(res => res.json());
}


submitPosts(user:User):Observable<User>{
    let headers = new Headers({'Accept':'application/json', 'Content-Type': 'application/json', });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://test.dev/api/books',user,options)
                        .map(res => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


}





}

interface Book{
    book_name:string,
    book_author:string
}
