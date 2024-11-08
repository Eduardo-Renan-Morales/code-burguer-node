/*
store    => Cadastrar / Adicinar
index    => Listar vários
show     => Listar apenas um
update   => Atualizar
delete   => deletar
*/
import { v4 } from "uuid";
import * as Yup from "yup";
import User from "../models/User.js";

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.boolean(),
    });

    // if (!(await schema.isValid(request.body))) {
    //   return response
    //     .status(400)
    //     .json({ error: "make sure your data is correct" });
    // }

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, email, password, admin } = request.body;

    const userExists = await User.findOne({
      where: { email },
    });
    if (userExists) {
      return response.status(400).json({ error: "User already exists" });
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });

    return response.json(user);
  }
}

export default new UserController();
