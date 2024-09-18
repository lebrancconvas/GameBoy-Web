export class Memory {
  static create(size: number) {
    const buffer = new ArrayBuffer(size);
    const data = new DataView(buffer);
    return data;
  }
};
