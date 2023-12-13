import express, { Request, Response } from 'express';
import { Server } from 'http';
import { AddressInfo } from 'net';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  //print out the request body
  console.log(req.body);
  res.send('Hello World!');
});
//serve /static
app.use(express.static('static'));

const server: Server = app.listen(port, () => {
  const { port } = server.address() as AddressInfo;
  console.log(`Listening on port ${port}`);
});
