import{ useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './style'



export default function EditUsina({dados, modalEdit}) {
   const classes = useStyles();
   const [nomeUsina, setNomeUsina] = useState('');
   const [endereco, setEndereco] = useState('');
   const [segmento, setSegmento] = useState('');


   async function handleUpdate(){
      if(!nomeUsina || !endereco || !segmento ){
      return
      }
      const data ={
         nomeusina: nomeUsina,
         endereco: endereco,
         segmento: segmento
      } 

      await fetch(`http://localhost:3333/usina/${dados.id}`,{
          method:'PUT',
          headers:{
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });      
  };
  
  useEffect(()=>{
   if(modalEdit){
       setNomeUsina(dados.nomeusina);
       setEndereco(dados.endereco);
       setSegmento(dados.segmento);
       return
   }},[modalEdit, dados])


  return (
    <>
      <form className={classes.root} onSubmit={handleUpdate} >        
         <div>
            <TextField
               className={classes.text}  
               required
               id="outlined-required"
               label="Nome Usina"
               variant="outlined"
               fullWidth
               onChange={(e)=> setNomeUsina(e.target.value)}
               value={nomeUsina}
            />
            <TextField
               className={classes.text} 
               required
               id="outlined-required"
               type="text"
               label="Endereco"
               variant="outlined"
               fullWidth
               onChange={(e)=> setEndereco(e.target.value)}
               value={endereco}
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
               onChange={(e)=> setSegmento(e.target.value)}
               value={segmento}
            />
         </div>
         <Button type="submit"  fullWidth  variant="contained" color="primary" size="large">
            EDITAR
         </Button>
      </form>
      
   </>
  );
}