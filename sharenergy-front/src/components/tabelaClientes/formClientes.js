import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export default function EditClientes({ dados, modalEdit }) {
  const classes = useStyles();
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  async function handleUpdate() {
    if (!nomeCliente || !telefone || !cpf || !email) {
      return;
    }
    const data = {
      nomecliente: nomeCliente,
      telefone: telefone,
      cpf: cpf,
      email: email,
    };
    await fetch(`https://api-sharenergy.herokuapp.com/cliente/${dados.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  useEffect(() => {
    if (modalEdit) {
      setNomeCliente(dados.nomecliente);
      setTelefone(dados.telefone);
      setCpf(dados.cpf);
      setEmail(dados.email);
      return;
    }
  }, [modalEdit, dados]);

  return (
    <form className={classes.root} onSubmit={handleUpdate}>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          fullWidth
          onChange={(e) => setNomeCliente(e.target.value)}
          value={nomeCliente}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Telefone"
          variant="outlined"
          fullWidth
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="CPF"
          variant="outlined"
          fullWidth
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-password-input"
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
      >
        EDITAR
      </Button>
    </form>
  );
}
