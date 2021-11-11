import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export default function Form() {
  const classes = useStyles();
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  async function handleAddCliente(event) {
    event.preventDefault()
    const dados = {
      nomecliente: nomeCliente,
      telefone: telefone,
      cpf: cpf,
      email: email,
    };

    try {
      await fetch("https://api-sharenergy.herokuapp.com/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      setNomeCliente('')
      setTelefone('')
      setCpf('')
      setEmail('')
      return;
    } catch (error) {
      return console.log(error.message);
    }
  }
  return (
    <form className={classes.root} onSubmit={handleAddCliente}>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          fullWidth
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Telefone"
          variant="outlined"
          fullWidth
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
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
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-password-input"
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
      >
        CADASTRAR
      </Button>
    </form>
  );
}
