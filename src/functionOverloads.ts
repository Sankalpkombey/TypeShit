// This actually works fine using a union type — so why do overloads even exist? The union approach is fine when the logic is similar. Overloads become useful when you want to tell TypeScript "if you pass a number, you'll definitely get X shape back; if you pass a string, you'll get Y shape back" — i.e., the relationship between input and output type is what you're describing, not just "either type is accepted

function formatId(id: number | string): string {
  if (typeof id === "number") {
    return `ID-${id.toString().padStart(4, "0")}`;
  } 
    return `ID-${id.toUpperCase()}`;
  }

 /*  console.log(formatId(42));
  console.log(formatId("abc")); */


// The first two lines (no body) are overload signatures — they describe the exact call patterns you support. The third line is the implementation signature — it must be compatible with all the overloads above it, but is never directly seen by callers.
  function getIdInfo(id: number): { numericId: number };
  function getIdInfo(id: string): { stringId: string};
  function getIdInfo(id: number | string): { numericId: number} | { stringId: string} {
    if (typeof id === "number") {
        return { numericId: id };
    }
    return { stringId: id };
  }

 /*  const a = getIdInfo(5)
  console.log(a.numericId);

  const b = getIdInfo("abc")
  console.log(b.stringId); */

 function parseInput(input: number): string;
 function parseInput(input: string): number;
 function parseInput(input: number | string): string | number {
    if (typeof input === "number") {
        return `ID-${input.toString().padStart(4, "0")}`;
    } else {
        return parseInt(input.length.toString());
    }}

    const a = parseInput(42);
    console.log(a);

    const b = parseInput("hello");
    console.log(b);