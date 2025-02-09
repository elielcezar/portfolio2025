const cors = require('cors');

app.use(cors({
    origin: ['https://eliel.dev', 'http://localhost:5173'], // permite tanto produção quanto desenvolvimento
    credentials: true
}));

// Certifique-se que estas middlewares estão presentes
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 