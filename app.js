const os = require('os')
setInterval(()=>{
    const print = {
        usuario: os.hostname(),
        plataforma:os.version(),
        totalmem: parseInt(os.totalmem()/1024/1024)+" MB",
        freemem:  parseInt(os.freemem()/1024/1024)+" MB",
        freepercent: parseInt((os.freemem()/os.totalmem())*100) + "%"
    }
    console.clear()
    console.table(print)
},1000)

