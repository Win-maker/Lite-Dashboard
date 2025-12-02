import { fetchChannelsApi } from "@/api/Channel/channelApi";
import { channelRepository } from "../repositories/channelRepository";


export const channelService = {
  async loadChannels() {
    let data;
    try {
      data = await fetchChannelsApi(); 
    } catch  {
      console.warn("API failed → using mock data");
      data = [
        { channelId: 1, channelName: "Bankanor", channelLeadName: "Ko Aung", branchId: 101, teamAmount: 4 },
        { channelId: 2, channelName: "Online Store", channelLeadName: "Ma Su Su", branchId: 101, teamAmount: 5 },
        { channelId: 3, channelName: "Corporate", channelLeadName: "U Kyaw", branchId: 102, teamAmount: 3 },
        { channelId: 4, channelName: "Aliance", channelLeadName: "U Zaw", branchId: 102, teamAmount: 5 }
      ];
    }

    await channelRepository.insertChannels(data);
    return data;
  },

  getChannelsByBranch(branchId: number) {
    return channelRepository.getChannelsByBranch(branchId);
  }
};
