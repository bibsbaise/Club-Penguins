import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordCheck: ['', [Validators.required]]
    }, { validators: this.passwordsMatch }); // valida se senhas coincidem
  }

  // Custom validator para verificar se as senhas coincidem
  passwordsMatch(group: AbstractControl) {
    const password = group.get('password')?.value;
    const passwordCheck = group.get('passwordCheck')?.value;
    return password === passwordCheck ? null : { passwordsMismatch: true };
  }

  // Método chamado no submit
  submitSignIn(): void {
    if (this.signInForm.valid) {
      console.log('Cadastro:', this.signInForm.value);
      alert('Cadastro realizado com sucesso!');
      // Aqui você chamaria o serviço para enviar os dados ao backend
    } else {
      this.signInForm.markAllAsTouched(); // força mostrar validações
      if (this.signInForm.errors?.['passwordsMismatch']) {
        alert('As senhas não coincidem!');
      }
    }
  }

  // Método auxiliar para exibir erros em tempo real (opcional)
  getControl(controlName: string) {
    return this.signInForm.get(controlName);
  }
}
