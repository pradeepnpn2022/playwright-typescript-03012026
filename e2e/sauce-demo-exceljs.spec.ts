
import ExcelJS from 'exceljs';

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('resources/sauce-demo.xlsx');
const worksheet = workbook.getWorksheet('Sheet1');

if (!worksheet) {
  throw new Error('Worksheet "Sheet1" not found');
}

worksheet.eachRow((row, rowNumber) => {
  console.log(`Row ${rowNumber}: ${row.cellCount} cells`);
  row.eachCell((cell, colNumber) => {
    console.log(`  Column ${colNumber}: ${cell.value}`);
  });
});
