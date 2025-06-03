import { Datastream } from '@solana-tracker/data-api';

const tokenAddress = "7xiRwsBVmryvuK3Bu5N3126u59d7zPT1f7tSd5Q3CDB";
// Connect to the Solana Tracker WebSocket
const dataStream = new Datastream({
  wsUrl: ''
});

console.log('Connecting to Solana Tracker data stream...');

dataStream.on('connected', () => console.log('Connected to Solana Tracker data stream'));
dataStream.on('disconnected', (type) => console.log(Disconnected: ${type}));
dataStream.on('reconnecting', (attempt) => console.log(Reconnecting... attempt ${attempt}));
dataStream.on('error', (err) => console.error('WebSocket Error:', err));

// Establish connection
dataStream.connect();

// Listen for connection events
dataStream.on('connected', () => console.log('Connected to Solana Tracker data stream'));

console.log('Listening for token transactions...');
// Example 3: Subscribe to token transactions with stored subscription reference
const txSubscription = dataStream.subscribe.tx.token(tokenAddress).on((transaction) => {
  console.log(Transaction type: ${transaction.type});
  console.log(Amount: ${transaction.amount});
  console.log(Price: $${transaction.priceUsd});
  console.log("Transaction details:", transaction);
});

// Later, unsubscribe from transactions
// txSubscription.unsubscribe();