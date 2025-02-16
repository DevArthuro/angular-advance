// The generic type it must to be an object 
// The generic by default is an empty object
interface ApiResponse<T extends object = {}> {
    data: T;
    status: number;
    message: string;
}


const request = (): ApiResponse<{ clientIp: string; process: string }> => {
    return {
        data: {
            clientIp: "124.21.32.12",
            process: "123456790"
        },
        message: "message here",
        status: 200
    }
}

const request2 = (): ApiResponse => {
  return {
    data: {},
    message: "message here",
    status: 200,
  };
};

console.log(request())
console.log(request2())

// Generics for functions of functions built-in

const set = new Set<number>()
set.add(2);

const map = new Map<string, Map<string, string>>()

map.set("random", new Map<string, string>().set("random", "random"))

const numbers = [1,2,3,4,5,6]

const numberParser = numbers.map<string>((number) => number.toString())
