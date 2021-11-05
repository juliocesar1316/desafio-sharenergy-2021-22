import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import "./style.css";

function Grafico() {
  const [dadosUsina, setDadosUsina] = useState([]);
  const [variavelY, setVariavelY] = useState();
  const [legenda, setLegenda] = useState();

  useEffect(() => {
    async function dadosUsina() {
      const response = await fetch(
        "https://api-sharenergy.herokuapp.com/graficoUsina",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setDadosUsina(data);
    }
    dadosUsina();
  }, []);

  const dataTensao = dadosUsina.map((x) => {
    return {
      name: parseFloat(x.tempo_h).toFixed(2),
      uv: parseFloat(x.tensao_v),
    };
  });

  const dataCorrente = dadosUsina.map((x) => {
    return {
      name: parseFloat(x.tempo_h).toFixed(2),
      uv: parseFloat(x.corrente_a),
    };
  });

  const dataPotencia = dadosUsina.map((x) => {
    return {
      name: parseFloat(x.tempo_h).toFixed(2),
      uv: parseFloat(x.potencia_kw),
    };
  });

  const dataTemperatura = dadosUsina.map((x) => {
    return {
      name: parseFloat(x.tempo_h).toFixed(2),
      uv: parseFloat(x.temperatura_c),
    };
  });

  return (
    <div className="main-dados">
      <div className="grafico">
        <AreaChart
          width={1300}
          height={500}
          data={variavelY ? variavelY : dataTensao}
          margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="2">
              <stop offset="5%" stopColor="#5664D2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5664D2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            name={legenda ? legenda : "Tensão(V)"}
            dataKey="uv"
            stroke="#5664D2"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
      <div className="buttons">
        <Button
          variant="outlined"
          onClick={() => {
            setVariavelY(dataTensao);
            setLegenda("Tensão(V)");
          }}
        >
          Tensão(Volts)
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setVariavelY(dataCorrente);
            setLegenda("Corrente(A)");
          }}
        >
          Corrente(Ampere)
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setVariavelY(dataPotencia);
            setLegenda("Potência(kW)");
          }}
        >
          Potência(kilowatts)
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setVariavelY(dataTemperatura);
            setLegenda("Temperatura(°C)");
          }}
        >
          Temperatura(°Celsius)
        </Button>
      </div>
    </div>
  );
}

export default Grafico;
