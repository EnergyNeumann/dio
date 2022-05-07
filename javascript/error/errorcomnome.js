const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage'; //o nome vira invalidmassage
throw MeuErro;