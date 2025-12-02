import db from "../indexedDbService";

export const channelRepository = {
  insertChannels(data: Channel[]) {
    return db.addMany("channel", data);
  },

  getChannelsByBranch(branchId: number) {
    return db.getByIndex("channel", "branchId", branchId);
  }
};
