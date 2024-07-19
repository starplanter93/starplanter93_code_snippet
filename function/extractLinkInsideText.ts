// import Link from "next/link";

export function replaceURLWithBlankLinks(text: string) {
  const exp = /(\b(https):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
  const parts = text.split(exp);

  console.log(parts);

  //   return parts.map((part, index) => {
  //     if (part === "https") return null;
  //     if (exp.test(part)) {
  //       return (
  //         <Link
  //           key={index}
  //           href={part}
  //           target="_blank"
  //           className="underline underline-offset-2 break-words"
  //         >
  //           {part}
  //         </Link>
  //       );
  //     }
  //     return part;
  //   });
}
