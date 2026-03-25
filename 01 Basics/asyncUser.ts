// assigns an order to different actions and does not leave behind any tasks.
// Otherwise, many tasks would not be completed in the app if they are called simultaneously.
async function getUser(id: string) {
    return Promise.resolve( {name: "abc"} )
}

type Y = Awaited<ReturnType<typeof getUser>>