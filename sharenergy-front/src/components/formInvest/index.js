import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export default function FormInvest() {
  const classes = useStyles();
  const [numeroCliente, setNumeroCliente] = useState("");
  const [usinaId, setUsinaId] = useState("");
  const [percentualDeParticipacao, setPercentualDeParticipacao] = useState("");

  async function handleAddCliente() {
    if (!numeroCliente || !usinaId || !percentualDeParticipacao) {
      return;
    }
    const dados = {
      numerocliente: numeroCliente,
      usinaid: usinaId,
      percentualdeparticipacao: percentualDeParticipacao,
    };

    try {
      await fetch("http://localhost:3333/investimento", {
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
    <form className={classes.root} onSubmit={handleAddCliente}>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          label="ID Cliente"
          type="number"
          variant="outlined"
          fullWidth
          onChange={(e) => setNumeroCliente(e.target.value)}
        />
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="ID Usina"
          variant="outlined"
          fullWidth
          onChange={(e) => setUsinaId(e.target.value)}
        />
      </div>
      <div>
        <TextField
          className={classes.text}
          required
          id="outlined-required"
          type="number"
          label="Percentual Receita"
          variant="outlined"
          fullWidth
          onChange={(e) => setPercentualDeParticipacao(e.target.value)}
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
