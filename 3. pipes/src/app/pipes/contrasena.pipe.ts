import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(password: string, activate: boolean = true): string {

    let result:string = '';
    if(activate){
      for(let i of password){
        result += '*';
      }
    }
    else{
      result = password;
    }

    return result;
  }

}
