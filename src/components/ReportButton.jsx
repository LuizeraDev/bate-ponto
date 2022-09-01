import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Button } from "@mui/material";
import axios from "axios";
import moment from "moment";

function Report() {
  const exportToCSV = async () => {
    const userToken = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/appointment/findall?date=${moment()}`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    const date = moment().format("DD-MM-YYYY-hh.mm.ss");

    const users = response.data;

    const dataFormated = users.map((user) => {
      console.log(user);
      const usersInfo = {
        Nome: user.name,
        Cpf: user.cpf,
        Minutos_Extras: user.extraMinutes,
        Minutos_Faltantes: user.faultMinutes,
      };

      return usersInfo;
    });

    const fileType = "xlsx";
    const ws = XLSX.utils.json_to_sheet(dataFormated);
    const wb = { Sheets: { Relatório: ws }, SheetNames: ["Relatório"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, `Relatório-Mensal-${date}.xlsx`);
  };

  return (
    <Button
      variant="contained"
      sx={{ py: 1 }}
      color="warning"
      onClick={exportToCSV}
    >
      <TextSnippetIcon />
      &nbsp;Relatório&nbsp;Mensal
    </Button>
  );
}

export default Report;
