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
import EditUsina from "./formUsina";
import CloseIcon from "@material-ui/icons/Close";

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
    width: "40em",
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
  },
  close: {
    position: "absolute",
    top: "5em",
    right: "20em",
    color: "#fff",
  },
});

export default function TabelaUsina() {
  const classes = useStyles();
  const [listaUsinas, setListaUsinas] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaUsina();
  }, []);

  async function listaUsina() {
    try {
      const response = await fetch(
        "https://api-sharenergy.herokuapp.com/usina",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setListaUsinas(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    await fetch(`https://api-sharenergy.herokuapp.com/usina/${id}`, {
      method: "DELETE",
    });
    listaUsina();
  }

  function handleClose(event) {
    event.preventDefault();
    setModalEdit(false);
  }

  return (
    <>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="left">Nome da Usina</StyledTableCell>
            <StyledTableCell align="left">Endereço</StyledTableCell>
            <StyledTableCell align="left">Segmento</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaUsinas.map((x) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell align="left">{x.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {x.nomeusina}
              </StyledTableCell>
              <StyledTableCell align="left">{x.endereco}</StyledTableCell>
              <StyledTableCell align="left">{x.segmento}</StyledTableCell>
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
                <IconButton color="primary" onClick={() => handleDelete(x.id)}>
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
          <EditUsina dados={dados} modalEdit={modalEdit} setModalEdit={setModalEdit} listaUsina={listaUsina}  />
        </div>
      )}
    </>
  );
}
