/**
 * This file should pass all linting checks.
 */

export function testFunction(a: number): number {
  return a + a;
}

export function changeType(a: number, b: number): string {
  return `${a} + ${b}`;
}

const DEFAULT_VALUE = 100;

const objectLiteral = {
  a: 1,
  b: 'abc',
  c: 99,
};

class MyClass {
  private static c: string = 'def';

  b: number;

  private a: string;

  constructor(a: string, b?: number) {
    this.a = a;
    this.b = b === undefined ? DEFAULT_VALUE : b;
  }

  method = (): boolean => this.b < DEFAULT_VALUE;

  otherMethod(): boolean {
    return this.b > DEFAULT_VALUE;
  }

  callPrivateMethod(): string {
    return this.loopingMethod([this.a, this.a]);
  }

  private loopingMethod(arr: string[]): string {
    let res: string = '';

    for (const s of arr) {
      for (let i = 0; i < this.b; ++i) {
        res += s;
      }
    }

    return res;
  }

  private alternateLoopingMethod(arr: string[]): string {
    return arr.map(s => s.repeat(this.b)).join();
  }
}

const myObj = new MyClass('mystring');

objectLiteral.b = myObj.loopingMethod;

export interface MyInterface<T> {
  a: T;
}

export interface MySubInterface extends MyInterface<string> {}

export function useChaining(val: { a?: { b: string } }): string {
  return val.a?.b || 'default';
}
