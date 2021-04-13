import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {

  public registerUser = {
    userName: "",
    password: "",
    password2: "",
  }
  warning;
  success: Boolean = false;
  loading: Boolean = false
  

  constructor(private authService: AuthService) { }
  
  onSubmit(): void {
   if(this.registerUser.userName != "" && this.registerUser.password === this.registerUser.password2){
      this.loading = true;
      this.authService.register(this.registerUser).subscribe(
        (success) => {
          this.success = true;
          this.warning = null;
          this.loading = false;
        },
        (err) => {
          this.success = false;
          this.warning = err.error.message
          console.log(err.error);
          this.loading = false; 
        }
      )
    } else if(this.registerUser.password != this.registerUser.password2){
      this.success = false;
      this.warning = "Passwords Do Not Match";
      this.loading = false;
      
    }
 }

  ngOnInit(): void {
  }

}
