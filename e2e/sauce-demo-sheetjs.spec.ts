import XLSX from 'xlsx';

const workbook = XLSX.readFile('resources/sauce-demo.xlsx');
const worksheet = workbook.Sheets['Sheet1'];

if (!worksheet) {
  throw new Error('Worksheet "Sheet1" not found');
}

const data = XLSX.utils.sheet_to_json(worksheet);
console.log('Excel Data: ', data);