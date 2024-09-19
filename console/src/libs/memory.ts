export class Memory {
  /**
   * Memory Class for Emulator.
   * @name create
   * @param {number} size: Size of the memory (Byte).
   * @returns {DataView} data: DataView object for memory buffer.
   */
  static create(size: number) {
    if(size <= 0) {
      throw new Error("Memory size must be greater than 0.");
    }
    const buffer = new ArrayBuffer(size);
    const data = new DataView(buffer);
    return data;
  }
};
