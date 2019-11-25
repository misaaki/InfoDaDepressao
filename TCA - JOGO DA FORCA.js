/*
ANDAMENTO DO PROJETO
1. Nome do Projeto;
    - Jogo da Forca.
2. Houveram modificações da proposta? Quais? Justifique;
    - Sim. Os níveis eram definidos apenas pela quantidade de letras, agora são definidos também a partir da quantidade de letras (porém com tamanho fixo, devido ao formato da minha forca, que como é desenhada de uma maneira diferente o tamanho da palavra influencia no tamanho da mesma) e número de tentativas.
3. Funcionalidades implementadas;
    - FUNCTIONS: SortWord (sorteia uma palavra), Forca (mais ou menos, pois modifiquei o desenho original da forca, mas ja trabalhei nele e estou fazendo implementações para a sua melhora), Tracejado, RightOrWrong (verifica se está certo ou errado e substitui no tracejado, diferentemente da WinOrLose que aceita palavras para definir se o jogo continuará; nessa mesma function as WrongLetters se encontram), RandomLetters (ela sorteia aleatoriamente uma letra e substitui no tracejado).
4. Funcionalidades faltantes;
    - WinOrLose (define se a pessoa ganhou ou perdeu), Tips (são as dicas, no caso 3 para cada palavra), ComingBack (quando a pessoa acerta 3 letras seguidas perde um membro), 
5. Qual o percentual já implementado, validação e limite de tentativas;
    - Diria que uns 30%, pois o essencial já foi feito, o que falta mesmo são minhas funcionalidades extras.
6. Código como está./*

/***********************
NOME: Antonella Cuello
MATRÍCULA: 11030379
TURMA: 1C
Lógica de Prog. - 4oBim
profa Raquel Barbosa
***********************/

//JOGO DA FORCA - PROJETO TCA
function SortWord (W, D) {
  var S = Math.floor(Math.random() * 3);
  var WSS = '';
  switch (D) {
    case 1:
      WSS = W[0][S];
      //WSS = WSS.join();
      break;
    case 2: 
      WSS = W[1][S];
      //WSS = WSS.join();
      break;
    case 3:
      WSS = W[2][S];
      //WSS = WSS.join();
      break;
  }
  //for (WS = [], CWS = 0; CWS < WSS.length; CWS++) {
      //WS[CWS] = WSS.slice(CWS, (CWS + 1));
  //}
  return WSS.split('');
}
/*function Tracejado (WS) {
  for (T = [], CT = 0; CT < WS.length; CT++) {
    T[CT] = '_';
  }
  return T;
}*/
function RightOrWrong (WS, G) {
  var CG;
  for (CG = 0; CG < WS.length; CG++) {
    if (G == WS[CG]) {
      T.splice(CG, 1, G);
      RL.push(G);
    }
    if (WS.indexOf(G) == -1 && WL.indexOf(G) == -1) {
      WL += G + ' ';
      CM++;
    }
  }
}
function HangmanMembers (G) {
	switch (D) {
		case 1: case 2: 
			switch (CM) {
				case 1:
					C = ['O'];
					break;
				case 2: 
					T1 = ['|'];
					break;
				case 3:
					T2 = ['|'];
					break;
				case 4:
					BE = ['/'];
					break;
				case 5:
					BD = ['\\'];
					break;
				case 6:
					PE = ['/'];
					break;
				case 7:
					PD = ['\\'];
					break;
			}
		case 3:
			switch (CM) {
				case 1:
					C = ['O'];
					break;
				case 2: 
					T1 = ['|'];
					break;
				case 3:
					BE = ['/'];
					break;
				case 4:
					BD = ['\\'];
					break;
				case 5:
					PE = ['/'];
					break;
				case 6:
					PD = ['\\'];
					break;
			}
	}
}
function RandomLetters (RL) {
    do {
        var S = Math.floor(Math.random() * WS.length);
    } while (RL.indexOf(WS[S]) != -1);
    return G = WS[S];
}
/*function WinOrLose (G) {
    if (G.length > 1) {
        WS.join('');
        if (G == WS) {
            return true;
        } else {
            return false;
        }
    }
}*/
var W = [['ALADIN', 'MURIEL', 'BARNEY'],['CELULAR', 'CEGONHA', 'BEZERRO'],['AMENDOIM', 'BEIJINHO', 'AZEITONA']];
var D = parseInt(prompt('dificuldade: '));
switch (D) {
    case 1: 
		var T, TT;
        T = ['_', '_', '_', '_', '_', '_'];
		TT = T.join(' ');
		var F = [[['  '],['_'],['_'],['_'],['_'],['  '],['  '],['  ']],[['  '],['|'],['  '],['  '],['  '],['|'],['  '],['  '],['  ']],[['  '],['|'],['  '],['  '],[' '],[C],['  '],['  '],['  ']],[['  '],['|'],['  '],['   '],[BE],[T1],[BD],['  '],['  ']],[['  '],['|'],['  '],['  '],['  '],[T2],['  '],['  '],['  ']],[['  '],['|'],['  '],['   '],[PE],[' '],[PD],['  '],['  ']],[['_'],['|'],['_'],['  '],['  '],['  '],['  '],['  ']],[['|'],['   '],['|'],[' '],[TT]],[['|'],[' '],[' '],[' '],[' '],[' '],[' '],[' '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],[' |']],[['|'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['|']]];
		F = F.join('\n');
		F = F.replace(/,/gi, '');
        break;
    case 2:
        var T = ['_', '_', '_', '_', '_', '_', '_'];
		var F = [[['  '],['_'],['_'],['_'],['_'],['  '],['  '],['  ']],[['  '],['|'],['  '],['  '],['  '],['|'],['  '],['  '],['  ']],[['  '],['|'],['  '],['  '],[' '],[C.join(' ')],['  '],['  '],['  ']],[['  '],['|'],['  '],['   '],[BPE.join(' ')],['|'],['\\'],['  '],['  ']],[['  '],['|'],['  '],['  '],['  '],['|'],['  '],['  '],['  ']],[['  '],['|'],['  '],['   '],['/'],[' '],['\\'],['  '],['  ']],[['_'],['|'],['_'],['  '],['  '],['  '],['  '],['  ']],[['|'],['   '],['|'],[T.join(' ')]],[['|'],[' '],[' '],[' '],[' '],[' '],[' '],[' '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],[' |']],[['|'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['|']]];
		F = F.join('\n');
		F = F.replace(/,/gi, '');
        break;
    case 3:
        var T = ['_', '_', '_', '_', '_', '_', '_', '_'];
		var F = [[['  '],['_'],['_'],['_'],['_'],['  '],['  '],['  '],['  ']],[['  '],['|'],['  '],['  '],['  '],['ㅗ'],['  '],['  '],['  ']],[['  '],['|'],['  '],['  '],[' '],['O'],['  '],['  '],['  ']],[['  '],['|'],['  '],['   '],['/'],['|'],['\\'],['  '],['  ']],[['  '],['|'],['  '],['   '],['/'],[' '],['\\'],['  '],['  ']],[['_'],['|'],['_'],['  '],['  '],['  '],['  '],['  '],['  ']],[['|'],['   '],['|'],[T.join(' ')]],[['|'],['  '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],['  '],[' |']],[['|'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],['_'],[' |']]];
		F = F.join('\n');
		F = F.replace(/,/gi, '');
        break;
}
var WS = SortWord (W, D);
var WL = '\n';
var RL = [];
var CM = 0;
var C = [];
var BD = [];
var BE = [];
var PD = [];
var PE = [];
var T1 = [];
var T2 = [];
do {
	var G = prompt('tentativa: ' + '\n' + F + WL).toUpperCase();
    if (G === '*') {
        RandomLetters (RL);
    }
    RightOrWrong (WS, G);
	HangmanMembers(F);
	TT = T.join(' ');
} while (T.join() != WS.join());
//if (WinOrLose(G) == true) {
    //alert('ganhou');
//} else {
  //  alert('perdeu');
//}
console.log(SortWord(WS) + '\n' + F);
