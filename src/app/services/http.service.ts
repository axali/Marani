/*import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
 
    postData(user: User){
          
        const body = {name: user.name, age: user.age};
        return this.http.post('http://localhost:3000/example', body); 
    }
}
export class AppComponent { 
   
    user: User=new User(); //User Visual:data.
      
    receivedUser: User; // recieved user.
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(user: User){
        this.httpService.postData(user)
                .subscribe(
                    (data: User) => {this.receivedUser=data; this.done=true;},
                    error => console.log(error)
                );
    }*/