const express = require('express');
const app = express();

// Body Parser
app.use(express.json());

// Contacts API Routes
app.use('/api/contacts', require('./routes/api/contacts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
