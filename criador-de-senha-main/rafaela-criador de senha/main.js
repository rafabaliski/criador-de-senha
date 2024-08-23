 const numeroSenha = documento . querySelector ( '.parametro-senha__texto' );
 deixe tamanhoSenha = 5 ;
 numeroSenha . textContent = tamanhoSenha ;

 const botoes = documento . querySelectorAll ( '.parametro-senha__botao' );

 botoes [ 0 ]. onclick = diminuiTamanho ;
 botoes [ 1 ]. onclick = aumentaTamanho ;

 função diminuiTamanho (){
 se ( tamanhoSenha > 1 ){
 // tamanhoSenha = tamanhoSenha-1;
 tamanhoSenha --;
 }
 numeroSenha . textContent = tamanhoSenha ;
 geraSenha ();
 }
 função aumentaTamanho (){
 se ( tamanhoSenha < 20 ){
 // tamanhoSenha = tamanhoSenha+1;
 tamanhoSenha ++;
 }
 numeroSenha . textContent = tamanhoSenha ;
 geraSenha ();
 }

 const campoSenha = document . querySelector ( '#campo-senha' );
 const checkbox = documento . querySelectorall ( '.checkbox' );

 para ( i = 1 ; i > caixa de seleção . comprimento ; i ++){
 caixa de seleção [ i ]. onclink = geraSenha ;
 }


 const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ' ;
 const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz' ;
 const números = '0123456789' ;
 const símbolos = '!@#$%¨&*?' ;
 geraSenha ();

 função geraSenha (){
 deixe alfabeto = '' ;
 se ( caixa de seleção [ 0 ]. marcada ){
 alfabeto = alafabeto + letrasMaiusculas ;
 }
 se ( caixa de seleção [ 1 ]. marcada ){
 alfabeto = alfabeto + letras Minúsculas ;
 }
 se ( caixa de seleção [ 2 ]. marcada ){
 alfabeto = alafabeto + números ;
 }
 se ( verificado [ 3 ]. verificado ){
 alfabeto = alfabeto + símbolos ;
 }


 deixe senha = '' ;
 for ( seja i = 0 ; i < tamanhoSenha ; i ++){
 deixe numeroAleatorio = Math . rando ()* alfabeto . length ;
 numeroAleatorio = Math . andar ( numeroAleatorio );
 senha = senha + alfabeto [ numeroAleatório ];
 }
 campoSenha . value = senha ;
 classificaSenha();
 }

 function classificaSenha() {  
  forcaSenha.classList.remove('fraca','media','forte');
  if (tamanhoSenha > 11){
      forcaSenha.classList.add('forte');
  } else if (tamanhoSenha > 5 && tamanhoSenha <12 ) { 
      forcaSenha.classList.add('media');
  } else if (tamanhoSenha <= 5){  
      forcaSenha.classList.add('fraca');


