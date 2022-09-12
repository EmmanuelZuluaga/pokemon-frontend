import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public listTeam:any=['Amarillo','Azul','Rojo'];


  public isLogin:any=true;

  public checkInputs:any=false;
  public nickname: FormControl;
  public password: FormControl;

  public name: FormControl;
  public team: FormControl;

  constructor(private router: Router, private authService: AuthService, private userService:UserService) {
    this.nickname= new FormControl('',[ Validators.required]);
    this.password= new FormControl('',[ Validators.required]);
    this.name= new FormControl('',[ Validators.required]);
    this.team= new FormControl('',[ Validators.required]);
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
      Swal.fire(
        'Warning',
        '¡Ops! fill in the fields.',
        'error'
      );
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

  public signUp(){
    if(this.name.valid&& this.password.valid && this.team.valid&& this.nickname.valid){
    
      let newUser={
        nickname:this.nickname.value,
        name:this.name.value,
        password:this.password.value,
        team:this.team.value
      }
      this.userService.signUp(newUser).subscribe({
        next: (response:any) => {
        
          if(response.success){
            Swal.fire(
              'Notification',
              'You can logIn :) ',
              'success'
            );
            this.isLogin=true;
          }else{
            Swal.fire(
              'Notification',
              '¡Ops! Try with another Nickname',
              'error'
            );
            this.clearInputs();
          }
       
        },
        error: (err: any) => {
          
          Swal.fire(
            'Notification',
            '¡Ops! Problem with the server',
            'error'
          );
        
        },
      })
    }else{
      this.checkInputs=true;
      Swal.fire(
        'Warning',
        '!Ops¡ fill in the fields ',
        'error'
      );
    }
    
  }
  public clearInputs(){
    this.nickname= new FormControl('',[ Validators.required]);
    this.password= new FormControl('',[ Validators.required]);
    this.name= new FormControl('',[ Validators.required]);
    this.team= new FormControl('',[ Validators.required]);
  }
}
