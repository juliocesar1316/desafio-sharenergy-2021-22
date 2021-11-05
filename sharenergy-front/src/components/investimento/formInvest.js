import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export default function EditInvest({ dados, modalEdit }) {
  const classes = useStyles();
  const [numeroCliente, setNumeroCliente] = useState("");
  const [usinaId, setUsinaId] = useState("");
  const [percentualDeParticipacao, setPercentualDeParticipacao] = useState("");

  async function handleUpdate() {
    if (!numeroCliente || !usinaId || !percentualDeParticipacao) {
      return;
    }
    const data = {
      numerocliente: numeroCliente,
      usinaid: usinaId,
      percentualdeparticipacao: percentualDeParticipacao,
    };

    await fetch(
      `https://api-sharenergy.herokuapp.com/investimento/${dados.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  }

  useEffect(() => {
    if (modalEdit) {
      setNumeroCliente(dados.nomecliente);
      setUsinaId(dados.nomeusina);
      setPercentualDeParticipacao(dados.percentualdeparticipacao);
      return;
    }
  }, [modalEdit, dados]);

  return (
    <>
      <form className={classes.root} onSubmit={handleUpdate}>
        <div>
          <TextField
            className={classes.text}
            id="outlined-read-only-input"
            label="Nome Usina"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            value={numeroCliente}
          />
          <TextField
            className={classes.text}
            id="outlined-read-only-input"
            type="text"
            label="Endereco"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            value={usinaId}
          />
        </div>
        <div>
          <TextField
            className={classes.text}
            required
            id="outlined-required"
            type="number"
            label="Segmento"
            variant="outlined"
            fullWidth
            onChange={(e) => setPercentualDeParticipacao(e.target.value)}
            value={percentualDeParticipacao}
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
    </>
  );
}
