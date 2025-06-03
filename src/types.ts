export interface DexTradeResponse {
  data?: {
    Solana?: {
      DEXTrades?: Array<{
        Trade: {
          Buy: {
            Amount: number;
            Currency: { Symbol: string };
            PriceInUSD: number;
          };
          Sell: {
            Amount: number;
            Currency: { Symbol: string };
          };
          Dex: { ProtocolName: string };
        };
        Transaction: {
          Signer: string;
          Signature: string;
        };
        Block: { Time: string };
      }>;
    };
  };
}
