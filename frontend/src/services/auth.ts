interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "someToken",
        user: {
          name: "Guilherme",
          email: "guilherme@dev.com",
        },
      });
    }, 2000);
  });
}
