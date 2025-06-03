import { Datastream } from '@solanatracker/data-api';
const TOKEN_MINT_ADDRESS = '28PvYPbQdBcpRwwNobRrWUqUkFQ2hwgZc3tLu1Qhpump';

// Initialize the Datastream with your API key
const dataStream = new Datastream({
  wsUrl: ''
});

// Connect to the WebSocket server
dataStream.connect();

// Handle connection events
dataStream.on('connected', () => console.log('Connected to datastream'));
dataStream.on('disconnected', () => console.log('Disconnected from datastream'));
dataStream.on('error', (error: any) => console.error('Datastream error:', error));

const txSubscription = dataStream.subscribe.tx.token(TOKEN_MINT_ADDRESS).on((transaction: any) => {
  console.log(`Transaction type: ${transaction.type}`);
  console.log(`Amount: ${transaction.amount}`);
  console.log(`Price: $${transaction.priceUsd}`);
});

// Later, unsubscribe from transactions
txSubscription.unsubscribe();



// const wsService = new WebSocketService("wss://websocket-url-here.com");



// wsService.joinRoom(`transaction:${TOKEN_MINT_ADDRESS}`);
// wsService.on(`transaction:${TOKEN_MINT_ADDRESS}`, (data: any) => {
//   console.log(`New transaction for ${TOKEN_MINT_ADDRESS}:`, data);
// });
