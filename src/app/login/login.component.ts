import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public checkInputs:any=false;
  public nickname: FormControl;
  public password: FormControl;

  constructor(private router: Router, private authService: AuthService) {
    this.nickname= new FormControl('',[ Validators.required]);
    this.password= new FormControl('',[ Validators.required]);
   }

   public login(){
    if(this.nickname.valid&& this.password.valid){
      let user={
        nickname: this.nickname.value,
        password: this.password.value
      }
      this.authService.login(user).subscribe((response:any)=>{
        if(response.success){
          this.saveInfoLocalStorage(response);
          this.router.navigate(['pokemons']);
        }
     
      });
    }else{
      this.checkInputs=true;
    }

   }


   public saveInfoLocalStorage(response:any) {
    let userLogin = {
      id: response.user.uid,
      tokenAccess: response.token,
      nickname:response.user.nickname
    };
    localStorage.setItem('user', JSON.stringify(userLogin));
    localStorage.setItem('token',response.token);
  }

  ngOnInit(): void {
  }

}
