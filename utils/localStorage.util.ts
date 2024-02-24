export const lsKeys = {
  offerData: 'offerData',
} as const;
export type LsKeys = (typeof lsKeys)[keyof typeof lsKeys];

function saveToLocalStorage(key: string, data: any): void {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

function readFromLocalStorage(key: string): any | null {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return null;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

export default {
  saveToLocalStorage,
  readFromLocalStorage,
};
