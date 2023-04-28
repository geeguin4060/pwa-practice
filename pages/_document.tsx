import { Html, Head, Main, NextScript } from "next/document";
import { useCallback, useEffect, useState } from "react";

export default function Document() {
  const [state1, setState1] = useState(false);
  const testFn = useCallback(() => {
    console.log(123);
  }, []);

  useEffect(() => {
    testFn();
  }, [testFn]);

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
