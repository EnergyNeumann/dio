/*1) Crie uma função getAdmin que recebe um Map
2) Crie um map e popule-o com nomes de usuários e seus papéis no sistema (ex: luis == Admin)
3) Dentro de getAdmin, utilize o loop for..of para retornar uma lista com os nomes dos usuarios que são adm*/   

function getAdmin(map){
    let admins = [];
    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
  }
  
  const usuarios = new Map();
  
  usuarios.set('Luis', 'Admin');
  usuarios.set('Pedro', 'Admin');
  usuarios.set('Carlos', 'User');
  usuarios.set('Fernando', 'Admin');

  console.log(getAdmin(usuarios));
  