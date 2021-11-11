import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export default function FormUsina() {
  const classes = useStyles();
  const [nomeUsina, setNomeUsina] = useState("");
  const [endereco, setEndereco] = useState("");
  const [segmento, setSegmento] = useState("");

  async function handleAddUsina() {
    if (!nomeUsina || !endereco || !segmento) {
      return;
    }
    const dados = {
      nomeusina: nomeUsina,
      endereco: endereco,
      segmento: segmento,
    };

    try {
      await fetch("http://localhost:3333/usina", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      return;
    } catch (error) {
      return console.log(error.message);
    }
  }

  return (
    <form className={classes.root} onSubmit={handleAddUsina}>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Nome da Usina"
          variant="outlined"
          fullWidth
          onChange={(e) => setNomeUsina(e.target.value)}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Endereço"
          variant="outlined"
          fullWidth
          onChange={(e) => setEndereco(e.target.value)}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="Segmento"
          variant="outlined"
          fullWidth
          onChange={(e) => setSegmento(e.target.value)}
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
