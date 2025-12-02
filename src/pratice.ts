export function sum<T> (items : T[] , field : keyof T) : number {
   return items.reduce((acc, item) => {
        const value = item[field];
        return acc + (typeof value === 'number'? value : 0)
    },0)  
}


export function average<T> (items : T[], field : keyof T) : number {
    const itemCount = items.length + 1;
       return items.reduce((acc, item) => {
        const value = item[field]
        return (acc + (typeof value === 'number'? value : 0)) / itemCount
       },0)
}