const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./src/routes/employee.route');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.json({ message: 'Connected' });
// });

app.use('/api/employees', route);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
