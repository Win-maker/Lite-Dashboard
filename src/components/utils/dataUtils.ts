// Count items in array
export function count<T>(items: T[]): number {
  return items.length;
}

// Sum any numeric field
export function sum<T>(items: T[], field: keyof T): number {
  return items.reduce((total, item) => {
    const value = item[field];
    return total + (typeof value === "number" ? value : 0);
  }, 0);
}

// Average any numeric field
export function average<T>(items: T[], field: keyof T): number {
  const total = sum(items, field);
  return items.length === 0 ? 0 : total / items.length;
}

// Group by any field
export function groupBy<T, K extends keyof T>(items: T[], key: K) {
  return items.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

// Count items by group
export function countBy<T, K extends keyof T>(items: T[], key: K) {
  const grouped = groupBy(items, key);
  return Object.entries(grouped).map(([group, list]) => ({
    key: group,
    count: list.length,
  }));
}

// Sum by group
export function sumBy<T, K extends keyof T>(items: T[], groupField: K, sumField: keyof T) {
  const grouped = groupBy(items, groupField);
  return Object.entries(grouped).map(([group, list]) => ({
    key: group,
    total: sum(list, sumField),
  }));
}

// Average by group
export function averageBy<T, K extends keyof T>(items: T[], groupField: K, averageField: keyof T) {
  const grouped = groupBy(items, groupField);
  return Object.entries(grouped).map(([group, list]) => ({
    key: group,
    average: list.length ? sum(list, averageField) / list.length : 0,
  }));
}


// Minimum value by group
export function minBy<T, K extends keyof T>(items: T[], groupField: K, numericField: keyof T) {
  const grouped = groupBy(items, groupField);

  return Object.entries(grouped).map(([group, list]) => ({
    key: group,
    min: Math.min(...list.map((i) => Number(i[numericField]))),
  }));
}


// Maximum value by group
export function maxBy<T, K extends keyof T>(items: T[], groupField: K, numericField: keyof T) {
  const grouped = groupBy(items, groupField);

  return Object.entries(grouped).map(([group, list]) => ({
    key: group,
    max: Math.max(...list.map((i) => Number(i[numericField]))),
  }));
}


// Percent by group (e.g. "% of total sales by category")
export function percentBy<T, K extends keyof T>(
  items: T[],
  groupField: K,
  numericField: keyof T
) {
  const total = sum(items, numericField);
  const grouped = groupBy(items, groupField);

  return Object.entries(grouped).map(([group, list]) => {
    const groupTotal = sum(list, numericField);
    return {
      key: group,
      percent: total === 0 ? 0 : (groupTotal / total) * 100,
    };
  });
}
