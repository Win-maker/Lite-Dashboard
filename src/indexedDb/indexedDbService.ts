class IndexedDbService<TStoreMap extends object> {
  private dbName = "SaleDashboardDb";
  private version = 1;
  private db: IDBDatabase | null = null;

  async initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = () => {
        const db = request.result;

        if (!db.objectStoreNames.contains("channel")) {
          const store = db.createObjectStore("channel", { keyPath: "channelId" });
          store.createIndex("channelName", "channelName", { unique: false });
          store.createIndex("channelLeadName", "channelLeadName", { unique: false });
          store.createIndex("branchId", "branchId", { unique: false });
          store.createIndex("teamAmount", "teamAmount", { unique: false });
        }
      };
    });
  }


  addMany<StoreName extends keyof TStoreMap>(
    storeName: StoreName,
    data: TStoreMap[StoreName][]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName as string, "readwrite");
      const store = tx.objectStore(storeName as string);
      data.forEach(item => store.put(item));
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

getByIndex<StoreName extends keyof TStoreMap, K extends keyof TStoreMap[StoreName]>(
    storeName: StoreName,
    indexName: K & string,
     value: TStoreMap[StoreName][K] & (IDBValidKey)
  ): Promise<TStoreMap[StoreName][]> {
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName as string, "readonly");
      const store = tx.objectStore(storeName as string);
      const index = store.index(indexName as string);

      const req = index.getAll(value);
      req.onsuccess = () => resolve(req.result as TStoreMap[StoreName][]);
      req.onerror = () => reject(req.error);
    });
  }
}



export default new IndexedDbService<DbStores>();
