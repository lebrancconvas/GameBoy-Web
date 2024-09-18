export class Memory {
  private _size: number;

  constructor(size: number) {
    this._size = size;
  }

  create() {
    const buffer = new ArrayBuffer(this._size);
    const data = new DataView(buffer);
    return data;
  }

};
