
function superLongFunction<A extends string, B extends string, C extends string>(param1: A, param2: B, param3?: C) {
  return param1 + param2 + param3;
}

class FirstClass {
  name: string;

  contructor(name: string) {
    this.name = name;
  }
}

class SecondClass {
  length: number;

  constructor(length: number) {
    this.length = length;
  }
}

const myVar: any = 123;

function logsButShouldNot(arg: string): void {
  console.log(arg);
}
