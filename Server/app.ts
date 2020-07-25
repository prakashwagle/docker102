import express from 'express'

const app = express();
const port = 9090;

app.get('/',(req,res)=>{
  res.send('Welcome to Bill Calculator');
});


app.listen(port,err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
