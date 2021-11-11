import { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditInvest from "./formInvest";
import CloseIcon from "@material-ui/icons/Close";
import FormInvest from "../formInvest";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      color: theme.palette.common.white,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    width: "65em",
    marginTop: "4em",
  },
  body: {
    backgroundColor: "#fff",
  },
  button: {
    display: "flex",
  },
  modal: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0, 0, 0,0.5)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    zIndex: "1",
  },
  close: {
    position: "absolute",
    top: "5em",
    right: "20em",
    color: "#fff",
  },
});

function Investimento() {
  const [firstTime, setFirstTime] = useState();
  const [lastTime, setLastTime] = useState();
  const [dadosGrafico, setDadosGrafico] = useState([]);
  const classes = useStyles();
  const [listaInvestimento, setListaInvestimento] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    dadosUsina();
    listaInvestimentos();
  }, []);

  async function dadosUsina() {
    const response = await fetch(
      "http://localhost:3333/graficoUsina",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setDadosGrafico(data);
    setFirstTime(data[0].tempo_h);
    setLastTime(data[data.length - 1].tempo_h);
  }

  async function listaInvestimentos() {
    try {
      const response = await fetch(
        "http://localhost:3333/investimento",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setListaInvestimento(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    await fetch(`http://localhost:3333/investimento/${id}`, {
      method: "DELETE",
    });
    listaInvestimentos();
  }

  function handleClose(event) {
    event.preventDefault();
    setModalEdit(false);
  }

  let soma = 0;
  dadosGrafico.map((x) => {
    return (soma = parseFloat(x.potencia_kw) + soma);
  });

  const EnergiaTotal =
    (parseFloat(lastTime) - parseFloat(firstTime)) / (dadosGrafico.length - 1);
  const receitaTotal = EnergiaTotal * soma * 0.95;

  return (
    <>
      <div className="valores">
        <div className="valorReais box">
          <p>Valor Energia</p>
          <p>R$ 0,95 / kWh</p>
        </div>
        <div className="potencia box ">
          <p>Potência Total </p>
          <p> {`${soma.toFixed(2)} kW`}</p>
        </div>
        <div className="receita box ">
          <p>Receita Total</p>
          <p>{`R$ ${receitaTotal.toFixed(2)}`}</p>
        </div>
      </div>
      <div className="halfBody">
        <FormInvest />

        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Nome do cliente</StyledTableCell>
              <StyledTableCell align="left">Cliente ID</StyledTableCell>
              <StyledTableCell align="left">Nome da Usina</StyledTableCell>
              <StyledTableCell align="left">Usina ID</StyledTableCell>
              <StyledTableCell align="left">Percentual Receita</StyledTableCell>
              <StyledTableCell align="left">Valor da Receita</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody className={classes.body}>
            {listaInvestimento.map((x) => (
              <StyledTableRow key={x.id}>
                <StyledTableCell align="left">{x.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {x.nomecliente}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {x.numerocliente}
                </StyledTableCell>
                <StyledTableCell align="left">{x.nomeusina}</StyledTableCell>
                <StyledTableCell align="left">{x.usinaid}</StyledTableCell>
                <StyledTableCell align="center">
                  {`${x.percentualdeparticipacao}%`}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {`R$ ${(
                    (parseFloat(x.percentualdeparticipacao) / 100) *
                    receitaTotal
                  ).toFixed(2)}`}
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.button}>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      setModalEdit(true);
                      setDados(x);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleDelete(x.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {modalEdit && (
          <div className={classes.modal}>
            <IconButton className={classes.close} onClick={handleClose}>
              <CloseIcon fontSize="large" color="#fff" />
            </IconButton>
            <EditInvest dados={dados} modalEdit={modalEdit} />
          </div>
        )}
      </div>
    </>
  );
}

export default Investimento;
