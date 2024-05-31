/*
store    => Cadastrar / Adicinar
index    => Listar vários
show     => Listar apenas um
update   => Atualizar
delete   => deletar 
*/
import { v4 } from 'uuid'
import User from '../models/User'

class UserController{
 async store(request,response){

        const { name, email, password_hash, admin,} = request.body
 
        const user = await User.create({
        id: v4(),
        name,
        email,
        password_hash,
        admin,
    })

       return response.json(user)
    }
}

export default new UserController()