import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

  getLogin():string { 

    return` <div class="form-wrapper">
     <form class="mt-4" action="#" method="POST">
            <!-- Campo de E-mail -->
            <div class="mb-4">
              <label for="email" class="block text-gray-600">E-mail</label>
              <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required>
            </div>
            <!-- Campo de Senha -->
            <div class="mb-6">
              <label for="password" class="block text-gray-600">Senha</label>
              <input type="password" id="password" name="password" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required>
               <div class="mt-2 text-sm ">
              <a href="#" class="text-green-600 hover:underline">Esqueceu a senha ?</a>
            {{{message}}}
            </div>
            </div>
            <!-- Botão de Login -->
            <button type="submit" class="w-full py-3 bg-green-600  text-white font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600">
              Entrar
            </button>
            <!-- Link para Cadastro -->
            <div class="mt-4 text-center">
              <button id="register-btn" class="text-green-600 hover:underline" > Criar uma conta</button>
            </div>
           <div class="border-b border-neutral-300 my-4"></div>
            <div class="w-full flex justify-center mt-4">
                <img class="w-[24px] h-[24px] mt-1" src="/assest/logo-google.png" alt="Entrar com conta Google">
                <img class="w-[30px] h-[30px] ml-4" src="/assest/logo-outlook.svg" alt="Entrar com conta Outlook">
            </div>
          </form>
    </div> `
  }

  // Função que retorna o código JavaScript para manipulação do formulário de login
  getRegisterScript(): string {
    return `
      document.getElementById('register-btn').addEventListener('click', function() {
        fetch('/auth/register')
          .then(response => response.text())
          .then(html => {
            document.querySelector('.form-wrapper').innerHTML = html;  // Substitui o formulário
          });
      });
    `;
  }

}
