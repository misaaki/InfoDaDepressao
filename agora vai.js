//JOGO DA FORCA - PROJETO TCA
function SortWord(W, D) {
  var S = Math.floor(Math.random() * 100);
  var WSS = '';
  switch (D) {
    case 1:
      WSS = W[0][S];
      break;
    case 2:
      WSS = W[1][S];
      break;
    case 3:
      WSS = W[2][S];
      break;
  }
  return WSS.split('');
}
function RightOrWrong(WS, G) {
  for (var CG = 0; CG < WS.length; CG++) {
    if (G == WS[CG]) {
      T.splice(CG, 1, G);
      RL.push(G);
      CBC++;
    }
    if (WS.indexOf(G) == -1 && WL.indexOf(G) == -1 && G.length == 1 && G != '*' && G != '%') {
      WL += G + ', ';
      CM++;
      CBC = 0;
    }
  }
}
function HangmanMembers(D, CM) {
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
          BE = ['/'];
          break;
        case 4:
          BD = ['\\'];
          break;
        case 5:
          T2 = ['|'];
          break;
        case 6:
          PE = ['/'];
          break;
        case 7:
          PD = ['\\'];
          break;
      }
      break;
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
      break;
  }
}
function ComingBack(D, CM) {
  switch (D) {
    case 1: case 2:
      switch (CM) {
        case 1:
          C = [''];
          break;
        case 2:
          T1 = [''];
          break;
        case 3:
          BE = [''];
          break;
        case 4:
          BD = [''];
          break;
        case 5:
          T2 = [''];
          break;
        case 6:
          PE = [''];
          break;
        case 7:
          PD = [''];
          break;
      }
      break;
    case 3:
      switch (CM) {
        case 1:
          C = [''];
          break;
        case 2:
          T1 = [''];
          break;
        case 3:
          BE = [''];
          break;
        case 4:
          BD = [''];
          break;
        case 5:
          PE = [''];
          break;
        case 6:
          PD = [''];
          break;
      }
      break;
  }
}
function RandomLetters(RL) {
  do {
    var S = Math.floor(Math.random() * WS.length);
  } while (RL.indexOf(WS[S]) != -1);
  return G = WS[S];
}
function Tips(D, W, WS, TIPC) {
  switch (D) {
    case 1:
      if (W[0].indexOf(WS.join('')) <= 10) {
        TIP = ['É um personagem masculino', ' de um anime', ' shounen.'];
      }
      if (W[0].indexOf(WS.join('')) > 10 && W[0].indexOf(WS.join('')) <= 20) {
        TIP = ['É um objeto', ' que você costuma ver diariamente', ' na escola.'];
      }
      if (W[0].indexOf(WS.join('')) > 20 && W[0].indexOf(WS.join('')) <= 30) {
        TIP = ['É um animal', ' pequeno', ' que voa.'];
      }
      if (W[0].indexOf(WS.join('')) > 30 && W[0].indexOf(WS.join('')) <= 40) {
        TIP = ['Tem relação com o genêro musical kpop', ', mais especificamente um idol', ' de um boygroup.'];
      }
      if (W[0].indexOf(WS.join('')) > 40 && W[0].indexOf(WS.join('')) <= 50) {
        TIP = ['Tem relação com um personagem', ' de um jogo', ' chamado League Of Legends.'];
      }
      if (W[0].indexOf(WS.join('')) > 50 && W[0].indexOf(WS.join('')) <= 60) {
        TIP = ['Personagem', ' de uma animação', ' infantil'];
      }
      if (W[0].indexOf(WS.join('')) > 60 && W[0].indexOf(WS.join('')) <= 70) {
        TIP = ['Tem relação com moda', ', faz parte do vestuário', ' e pode ser um acessório ou roupa.'];
      }
      if (W[0].indexOf(WS.join('')) > 70 && W[0].indexOf(WS.join('')) <= 80) {
        TIP = ['Tem relação com o IF', ', é um colega', ' de informática.'];
      }
      if (W[0].indexOf(WS.join('')) > 80 && W[0].indexOf(WS.join('')) <= 90) {
        TIP = ['Não é um objeto ou alimento', ', é um nome próprio', ' feminino.'];
      }
      if (W[0].indexOf(WS.join('')) > 90 && W[0].indexOf(WS.join('')) <= 100) {
        TIP = ['É um funcionário', ' do IF', ', mais especificamente um professor.'];
      }
      switch (TIPC) {
        case 1:
          alert(TIP[0] + '...');
          break;
        case 2:
          alert(TIP[0] + TIP[1] + '...');
          break;
        case 3:
          alert(TIP.join(''));
      }
      break;
    case 2:
      TIP = ['Neste nível não existem dicas. :('];
      alert(TIP.join(''));
      break;
    case 3:
      if (W[2].indexOf(WS.join('')) <= 10) {
        TIP = ['É um animal', ' que geralmente não é mantido dentro de casa, ou pelo menos não deveria.'];
      }
      if (W[2].indexOf(WS.join('')) > 10 && W[0].indexOf(WS.join('')) <= 20) {
        TIP = ['É um alimento', ', em especifíco, uma fruta.'];
      }
      if (W[2].indexOf(WS.join('')) > 20 && W[0].indexOf(WS.join('')) <= 30) {
        TIP = ['Faz parte da categoria alimentos', ' e é doce.'];
      }
      if (W[2].indexOf(WS.join('')) > 30 && W[0].indexOf(WS.join('')) <= 40) {
        TIP = ['É um nome próprio', ' masculino.'];
      }
      if (W[2].indexOf(WS.join('')) > 40 && W[0].indexOf(WS.join('')) <= 50) {
        TIP = ['É um objeto', ' que você encontra em casa.'];
      }
      if (W[2].indexOf(WS.join('')) > 50 && W[0].indexOf(WS.join('')) <= 60) {
        TIP = ['Não é algo físico (coisa).', ' É um verbo.'];
      }
      if (W[2].indexOf(WS.join('')) > 60 && W[0].indexOf(WS.join('')) <= 70) {
        TIP = ['Não é um objeto, nem animal, nem alimento.', ' É um adjetivo.'];
      }
      if (W[2].indexOf(WS.join('')) > 70 && W[0].indexOf(WS.join('')) <= 80) {
        TIP = ['É algo que remete à criança', ', algo com que possa brincar.'];
      }
      if (W[2].indexOf(WS.join('')) > 80 && W[0].indexOf(WS.join('')) <= 90) {
        TIP = ['É um personagem', ' do League of Legends.'];
      }
      if (W[2].indexOf(WS.join('')) > 90 && W[0].indexOf(WS.join('')) <= 100) {
        TIP = ['É um animal marinho', ', mais especificamente um peixe.'];
      }
      switch (TIPC) {
        case 1:
          alert(TIP[0] + '...');
          break;
        case 2:
          alert(TIP.join(''));
          break;
      }
      break;
  }
}
function RenewT(F) {
  switch (D) {
    case 1:
      F = [[['  '], ['_'], ['_'], ['_'], ['_'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], ['|'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], [' '], [C], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [BE], [T1], [BD], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], [T2], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [PE], [' '], [PD], ['  '], ['  ']], [['_'], ['|'], ['_'], ['  '], ['  '], ['  '], ['  '], ['  ']], [['|'], ['   '], ['|'], [' '], [TT]], [['|'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['|']]];
      break;
    case 2:
      F = [[['  '], ['_'], ['_'], ['_'], ['_'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], ['|'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], [' '], [C], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [BE], [T1], [BD], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], [T2], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [PE], [' '], [PD], ['  '], ['  ']], [['_'], ['|'], ['_'], ['  '], ['  '], ['  '], ['  '], ['  ']], [['|'], ['   '], ['|'], [' '], [TT]], [['|'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['|']]]; break;
      break;
    case 3:
      F = [[['  '], ['_'], ['_'], ['_'], ['_'], ['  '], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], ['|'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], [' '], [C], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [BE], [T1], [BD], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [PE], [' '], [PD], ['  '], ['  ']], [['_'], ['|'], ['_'], ['  '], ['  '], ['  '], ['  '], ['  '], ['  ']], [['|'], ['  '], ['|'], [' '], [TT]], [['|'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['|']]];
      break;
  }
  F = F.join('\n');
  F = F.replace(/,/gi, '');
  return F;
}
do {
  do {
    var menu = prompt('𝑺𝒆𝒋𝒂 𝒃𝒆𝒎-𝒗𝒊𝒏𝒅𝒐 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒇𝒐𝒓𝒄𝒂!   (◡‿◡✿)' + '\n▸ Digite 1 para ver as regras;' + '\n▸ Digite 2 para ver os diferenciais/extras;' + '\n▸ Aperte enter para jogar.');
    switch (menu) {
      case '1':
        alert('Como o jogo funciona?   (。⌒∇⌒)。' + '\n▸ O jogo da forca é um jogo em que o jogador tem que acertar qual é a palavra proposta, tendo como dica inicial o número de letras dessa palavra;' + '\n▸ A cada tentativa falha irá ser adicionado um membro ao corpo do enforcado, iniciando pela cabeça, tronco, braços e terminando nas pernas;' + '\n▸ O jogo termina ou com o acerto da palavra ou com o término do preenchimento das partes corpóreas do enforcado, assim resultando no que chamamos de “forca”.');
        break;
      case '2':
  			alert('E os extras?   。(⌒∇⌒。)' + '\n▹ O jogo é subdividido em níveis:' + '\n   1. FÁCIL - Contendo palavras com 6 letras e uma tentativa a mais devido ao tamanho da forca nesta dificuldade;' + '\n   2. MÉDIO - Contendo palavras de 7 letras e o mesmo número de tentativas no modo fácil;' + '\n   3. DIFÍCIL - Contendo palavras de 8 letras e uma tentativa a menos, devido ao tamanho da forca.'  + '\n▹ Para cada palavra no nível fácil irá ter 3 dicas. Já no nível difícil, irão ter apenas 2. Tendo em vista que no nível médio tem-se a mesma quantidade de tentativas, essa funcionalidade não se aplica à esse nível. Para utilizar este comando insere-se "%".' + '\n▹ Caso o jogador esteja sem ideias de letras pode-se inserir o caracter "*" que uma letra irá ser substituída no tracejado de maneira aleatória, porém este comando só poderá ser utilizado 2 vezes;' + '\n▹ Caso o jogador acerte 3 letras consecutivamente um membro do enforcado irá ser removido, caso ele não tenha nenhum nada acontecerá.');

        break;
      case '':
        break;
    }
  } while (menu != '');
  var W = [['NARUTO', 'SASUKE', 'ITACHI', 'JIRAYA', 'TEMARI', 'VEGETA', 'MINATO', 'FREEZA', 'JIROBO', 'BORUTO', 'AGENDA', 'QUADRO', 'LOUSA', 'CANETA', 'CRACHA', 'CANTIL', 'OCULOS', 'CANECA', 'LIVROS', 'ESTOJO', 'AZULAO', 'ABELHA', 'BICUDO', 'GAVIAO', 'PARDAL', 'ZANGAO', 'PERDIZ', 'ABUTRE', 'HARPIA', 'JABURU', 'XIUMIN', 'HOSEOK', 'JOSHUA', 'JISUNG', 'JAEMIN', 'JOHNNY', 'RENJUN', 'YOONGI', 'DANIEL', 'MINGYU', 'AATROX', 'ANIVIA', 'EZREAL', 'DARIUS', 'JAYCE', 'KOGMAW', 'KHAZIX', 'LUCIAN', 'MAOKAI', 'QYANA', 'ALADIN', 'BARBIE', 'AURORA', 'MONICA', 'POPEYE', 'SNOOPY', 'TIGRAO', 'LEITAO', 'RAVENA', 'MERIDA', 'TUNICA', 'SUETER', 'PIJAMA', 'CAMISA', 'BOTINA', 'BLAZER', 'SAPATO', 'FEDORA', 'BATINA', 'PAPETE', 'THIAGO', 'MARCOS', 'RAQUEL', 'EMILLY', 'ISAQUE', 'ARTHUR', 'MURILO', 'MARINA', 'BETITO', 'MARCIO', 'ISABEL', 'ESTELA', 'MIRIAN', 'REGINA', 'JESICA', 'YASMIN', 'MILENA', 'LORENA', 'CAMILE', 'NICOLE', 'GANDRA', 'SAMUEL', 'ZUNINO', 'DEBORA', 'SANDRA', 'MARCIO', 'DELNIR', 'NATHAN', 'ROZELE', 'CARLOS'], ['BESOURO', 'BEZERRO', 'CEGONHA', 'CANGURU', 'ESQUILO', 'GALINHA', 'HAMSTER', 'JUMENTO', 'LAMBARI', 'MORCEGO', 'MARMOTA', 'PINGUIM', 'PIRANHA', 'TILAPIA', 'CODORNA', 'CARACOL', 'DONINHA', 'FORMIGA', 'GAIVOTA', 'MINHOCA', 'ALICATE', 'AZULEJO', 'BALANÇA', 'BENGALA', 'BISTURI', 'BIGORNA', 'CARTOLA', 'CHUPETA', 'ESPELHO', 'GARRAFA', 'JAQUETA', 'LIXEIRA', 'MACHADO', 'MARTELO', 'PALHETA', 'QUIMONO', 'SERROTE', 'TECLADO', 'VIOLAO', 'TAMANCO', 'ALFAJOR', 'ABACAXI', 'CERVEJA', 'CUPCAKE', 'KETCHUP', 'ALECRIM', 'LASANHA', 'CANJICA', 'CENOURA', 'DAMASCO', 'SORVETE', 'REPOLHO', 'TEQUILA', 'SUSPIRO', 'MIRTILO', 'JERIMUM', 'COXINHA', 'ACEROLA', 'ALPISTE', 'COSTELA', 'AKAMARU', 'DOCINHO', 'FRAJOLA', 'CORINGA', 'AQUAMAN', 'BAKUGAN', 'MISTICA', 'POKEMON', 'PATRICK', 'SININHO', 'FELICIA', 'KURIRIN', 'LEONCIO', 'CICLOPE', 'HAMTARO', 'CRUELLA', 'DIGIMON', 'NOTURNO', 'DEIDARA', 'EMBUSTE', 'EMPATIA', 'AMPUTAR', 'EMERGIR', 'DEBOCHE', 'PADECER', 'EMOTIVO', 'HESITAR', 'CORAGEM', 'QUIMERA', 'PROFANO', 'IMPACTO', 'DESAFIO', 'REGULAR', 'SINCERO', 'AMIZADE', 'MOLEQUE', 'SAUDADE', 'PLANETA', 'PERMUTA', 'BERMUDA'], ['CASCAVEL', 'ARAPONGA', 'ELEFANTE', 'GUEPARDO', 'SURICATO', 'ZORRILHO', 'AVESTRUZ', 'ALBATROZ', 'ARIRANHA', 'CAPIVARA', 'MEXERICA', 'MARACUJA', 'GROSELHA', 'MELANCIA', 'JENIPAPO', 'GABIROBA', 'AZEITONA', 'SAPUCAIA', 'GRAVIOLA', 'PITANGAO', 'CARAMELO', 'AMBROSIA', 'CHICLETE', 'GELATINA', 'PIRULITO', 'RAPADURA', 'GOIABADA', 'MERENGUE', 'PANETONE', 'BEIJINHO', 'LEONARDO', 'VINICIUS', 'HENRIQUE', 'FERNANDO', 'ANDERSON', 'JONATHAN', 'MAURICIO', 'DOMINICK', 'NICHOLAS', 'ANTONIO', 'ALMOFADA', 'CHUVEIRO', 'COBERTOR', 'COTONETE', 'ESFREGAO', 'ISQUEIRO', 'MAÇANETA', 'PERSIANA', 'VASSOURA', 'ESPATULA', 'ARREPIAR', 'ASSALTAR', 'AUXILIAR', 'DESLIGAR', 'CONTRAIR', 'RESPIRAR', 'SUPLICAR', 'SUPORTAR', 'TROPEÇAR', 'SAPATEAR', 'INVASIVO', 'ADORAVEL', 'PECULIAR', 'PRUDENTE', 'ALIENADO', 'ARDILOSO', 'AMIGAVEL', 'SUBMISSO', 'GENEROSO', 'COMPLEXO', 'CARRINHO', 'ELASTICO', 'GANGORRA', 'PATINETE', 'TAMBORIM', 'XILOFONE', 'BILBOQUE', 'FANTOCHE', 'PANDEIRO', 'FANTASIA', 'KATARINA', 'KASSADIN', 'VOLIBEAR', 'VLADIMIR', 'MALPHITE', 'MALZAHAR', 'NAUTILUS', 'NOCTURNE', 'PANTHEON', 'RENEKTON', 'TUBARANA', 'BACALHAU', 'LINGUADO', 'TAMBAQUI', 'TAMBORIL', 'TRICOLOR', 'SAICANGA', 'SARDINHA', 'LAMPREIA', 'TUCUNARE']];
  var WL = '';
  var RL = [];
  var RDLC = 0;
  var CM = 0;
  var C = [];
  var BD = [];
  var BE = [];
  var PD = [];
  var PE = [];
  var T1 = [];
  var T2 = [];
  var TT = '';
  var TIP = [];
  var TIPC = 0;
  var CBC = 0;
  do {
    var D = parseInt(prompt('→  𝑫𝑰𝑭𝑰𝑪𝑼𝑳𝑫𝑨𝑫𝑬𝑺:     ᕦ( ͡° ͜ʖ ͡°)ᕤ' + '\n- Digite 1 para jogar no modo 𝒇𝒂𝒄𝒊𝒍;' + '\n- Digite 2 para jogar no nível 𝒎𝒆𝒅𝒊𝒐;' + '\n- Digite 3 para jogar no modo 𝒅𝒊𝒇𝒊𝒄𝒊𝒍.'));
  } while (D != 1 && D != 2 && D != 3);
  switch (D) {
    case 1:
      var T = ['_', '_', '_', '_', '_', '_'];
      TT = T.join(' ');
      var F = [[['  '], ['_'], ['_'], ['_'], ['_'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], ['|'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], [' '], [C], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [BE], [T1], [BD], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], [T2], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [PE], [' '], [PD], ['  '], ['  ']], [['_'], ['|'], ['_'], ['  '], ['  '], ['  '], ['  '], ['  ']], [['|'], ['   '], ['|'], [' '], [TT]], [['|'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['|']]];
      break;
    case 2:
      var T = ['_', '_', '_', '_', '_', '_', '_'];
      TT = T.join(' ');
      var F = [[['  '], ['_'], ['_'], ['_'], ['_'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], ['|'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], [' '], [C], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [BE], [T1], [BD], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], [T2], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [PE], [' '], [PD], ['  '], ['  ']], [['_'], ['|'], ['_'], ['  '], ['  '], ['  '], ['  '], ['  ']], [['|'], ['   '], ['|'], [' '], [TT]], [['|'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['|']]];
      break;
    case 3:
      var T = ['_', '_', '_', '_', '_', '_', '_', '_'];
      TT = T.join(' ');
      var F = [[['  '], ['_'], ['_'], ['_'], ['_'], ['  '], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], ['  '], ['|'], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['  '], [' '], [C], ['  '], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [BE], [T1], [BD], ['  '], ['  ']], [['  '], ['|'], ['  '], ['   '], [PE], [' '], [PD], ['  '], ['  ']], [['_'], ['|'], ['_'], ['  '], ['  '], ['  '], ['  '], ['  '], ['  ']], [['|'], ['  '], ['|'], [' '], [TT]], [['|'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['|']]];
      break;
  }
  var WS = SortWord(W, D);
  if (D == 1 || D == 2) {
    do {
      TT = T.join(' ');
      var G = prompt('LETRAS ERRADAS: ' + WL + '\n' + RenewT(F)).toUpperCase();
      if (G === '*' && RDLC != 2) {
        RDLC++;
        RandomLetters(RL);
      }
      if (G === '%') {
        TIPC++;
        Tips(D, W, WS, TIPC);
      }
      if (G.length > 1 && G.length == WS.length) {
        if (G == WS.join('')) {
          alert('Você acertou, a palavra era ' + WS.join('') + '!' + '  ヽ(⌒∇⌒)ﾉ');
          break;
        } else {
          alert('Você perdeu, a palavra era ' + WS.join('') + '!' + '   o(╥﹏╥)o');
          break;
        }
      }
      RightOrWrong(WS, G);
      HangmanMembers(D, CM);
      if (CBC == 3) {
        ComingBack(D, CM);
        CBC = 0;
        CM--;
      }
    } while (T.join() != WS.join() && CM != 7);
    if (T.join('') == WS.join('')) {
      alert('Você acertou, a palavra era ' + WS.join('') + '!' + '  ヽ(⌒∇⌒)ﾉ');
    }
    if (CM == 7) {
      alert('Você perdeu, a palavra era ' + WS.join('') + '!' + '   o(╥﹏╥)o');
    }
  } else if (D == 3) {
    do {
      TT = T.join(' ');
      var G = prompt('LETRAS ERRADAS: ' + WL + '\n' + RenewT(F)).toUpperCase();
      if (G === '*' && RDLC != 2) {
        RDLC++;
        RandomLetters(RL);
      }
      if (G === '%') {
        TIPC++;
        Tips(D, W, WS, TIPC);
      }
      if (G.length > 1 && G.length == WS.length) {
        if (G == WS.join('')) {
          alert('Você acertou, a palavra era ' + WS.join('') + '!' + '  ヽ(⌒∇⌒)ﾉ');
          break;
        } else {
          alert('Você perdeu, a palavra era ' + WS.join('') + '!' + '   o(╥﹏╥)o');
          break;
        }
      }
      RightOrWrong(WS, G);
      HangmanMembers(D, CM);
      if (CBC == 3) {
        ComingBack(D, CM);
        CBC = 0;
        CM--;
      }
    } while (T.join() != WS.join() && CM != 6);
    if (T.join('') == WS.join('')) {
      alert('Você acertou, a palavra era ' + WS.join('') + '!' + '  ヽ(⌒∇⌒)ﾉ');
    }
    if (CM == 6) {
      alert('Você perdeu, a palavra era ' + WS.join('') + '!' + '   o(╥﹏╥)o');
    }
  }
  do {
    var PlayAgain = prompt('➮ Deseja jogar novamente? (/•ิ_•ิ)/' + '\n(Responda com S ou N)').toUpperCase();
  } while (PlayAgain != 'S' && PlayAgain != 'N');
} while (PlayAgain != 'N');
alert("FIM DE JOGO! ヽ(⊙０⊙)ノ' + '\n' + '\nObrigada por jogar!' + '\n' + '\nCRIADO POR: Antonella Cuello  (つ▀¯▀)つ');
