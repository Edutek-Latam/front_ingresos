import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('Guard')
  const router = inject(Router)
  const _authService = inject(AuthService)
  const isValid = _authService.totp
  if(!isValid){
    router.navigate(['login'])
  }
  return true;
};
