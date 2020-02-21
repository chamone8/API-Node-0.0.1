
const app = require('../src/app');

const port = nomalizaPorta(process.env.PORT || 9001);

function nomalizaPorta(valor){
    const port = parseInt(valor, 10);
    if(isNaN(port)){
        return valor;
    }

    if(port >= 0){
        return port;
    }

    return false;
}


app.listen(port, function(){
    console.log(`Servidor conectado porta ${port}`);
});

