import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
@ViewChildren('navbarItem') navbar:QueryList<ElementRef>
@ViewChild('navbarToggle') toggle:ElementRef
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // navbar functionality methods
  goTo(index){
      this.navbar.forEach((item, i)=>{
            item.nativeElement.classList.remove('active')
            if(i == index){
              item.nativeElement.classList.add('active')
              this.toggle.nativeElement.classList.remove('show')
            }
      })
  }

  toggleBtn(){
  
      if(!this.toggle.nativeElement.classList.contains('show')){
        this.toggle.nativeElement.classList.add('show')
      }else{
        this.toggle.nativeElement.classList.remove('show')
      }
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
