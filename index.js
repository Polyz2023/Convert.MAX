const express = require('express');
const app = express();

const path=require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Загрузка главного файла HTML вашего Vue.js приложения
  });

app.listen(4018, () => {
    console.log('Server is running on http://localhost:4018');
});