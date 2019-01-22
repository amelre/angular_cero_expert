import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

    forma:FormGroup;

    usuario:Object={
        nombreCompleto:{
            nombre:'alejandra',
            apellido:'melendez',
        },
        email:'ale@mail.com',
        // pasatiempos:['correr','dormir','comer']
    }

  constructor() {
      this.forma = new FormGroup({

          'nombreCompleto': new FormGroup({
              'nombre': new FormControl('',[
                                              Validators.required,
                                              Validators.minLength(3)
                                          ]),
              'apellido': new FormControl('',[Validators.required, this.noMelendez])
          }),
          'email': new FormControl('',[
                                          Validators.required,
                                          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                      ] ),
          'pasatiempos': new FormArray([
              new FormControl('Correr',Validators.required)
          ]),
           'username': new FormControl('', Validators.required, this.existeUsuario),
          'password1': new FormControl('', Validators.required),
          'password2': new FormControl()
      });

      // this.forma.setValue(this.usuario);

      this.forma.controls['password2'].setValidators(
          [
              Validators.required,
              this.noIgual.bind(this.forma)
          ]);


      /*observador*/
      this.forma.valueChanges
      .subscribe( data => {
          // console.log(data);
      })

      this.forma.controls['username'].valueChanges
      .subscribe( data => {
          console.log(data);
      })

      this.forma.controls['username'].statusChanges
      .subscribe( data => {
          console.log(data);
      })


  }




/*lo ideal es tener un archivo de validaciones*/
noMelendez( control:FormControl ): {[s:string]:boolean}{
    if(control.value === "melendez"){
        return {
            nomelendez:true
        }
    }
    return null;
}

noIgual( control:FormControl ): {[s:string]:boolean}{

    let forma:any = this;
    if(control.value !== forma.controls['password1'].value){
        return {
            noiguales:true
        }
    }
    return null;
}


existeUsuario(control: FormControl):Promise<any>|Observable<any>{

    let promesa = new Promise(
        (resolve, reject) => {

            setTimeout( ()=> {
                if(control.value === "strider"){
                    resolve({existe:true})
                }else{
                    resolve(null)
                }
            },3000 )

        }
    )
    return promesa;
}



  agregarPasatiempo(){
      (<FormArray>this.forma.controls['pasatiempos']).push(
        new FormControl('', Validators.required)
      );
  }

  guardarCambios(){
      console.log(this.forma.value);
       // this.forma.reset({
       //     nombreCompleto:{
       //         nombre:'',
       //         apellido:''
       //     },
       //     email:''
       // });
       // this.forma.controls['email'].setValue('nuevo@d.com');
  }





}
