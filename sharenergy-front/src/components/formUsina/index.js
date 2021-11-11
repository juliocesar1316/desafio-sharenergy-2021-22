import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export default function FormUsina() {
  const classes = useStyles();
  const [nomeUsina, setNomeUsina] = useState("");
  const [endereco, setEndereco] = useState("");
  const [segmento, setSegmento] = useState("");

  async function handleAddUsina(event) {
    event.preventDefault()
    const dados = {
      nomeusina: nomeUsina,
      endereco: endereco,
      segmento: segmento,
    };
    try {
      await fetch("https://api-sharenergy.herokuapp.com/usina", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      setNomeUsina('')
      setEndereco('')
      setSegmento('')
      return;
    } catch (error) {
      return console.log(error.message);
    }
  }

  return (
    <>
      <form className={classes.root} onSubmit={handleAddUsina}>
        <div>
          <TextField
            className={classes.text}
            required
            id="outlined-required"
            label="Nome Usina"
            variant="outlined"
            fullWidth
            value={nomeUsina}
            onChange={(e) => setNomeUsina(e.target.value)}
          />
          <TextField
            className={classes.text}
            required
            id="outlined-required"
            type="text"
            label="Endereco"
            variant="outlined"
            fullWidth
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className={classes.text}
            required
            id="outlined-required"
            type="text"
            label="Segmento"
            variant="outlined"
            fullWidth
            value={segmento}
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
    </>
  );
}
