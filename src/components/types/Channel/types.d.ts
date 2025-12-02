interface DbStores {
  channel: Channel;
  // Add more stores here if needed
}

interface Channel {
  channelId: number;
  channelName: string;
  channelLeadName: string;
  branchId: number;
  teamAmount: number;
}
