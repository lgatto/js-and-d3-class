// TODO
//
//   implement a promise chain that threads userPromise to:
//
//     getAccount - retrieve the account
//
//   and thread user, account into `formatHtml`, ensuring you transform
//   errors by returning `formatError`
//
//
//
//   handleUserPromise(
//     userPromise: Promise<user>,
//     getAccount: (user) => Promise<account>,
//     formatHtml: (user, account) => html: string,
//     formatError: (error) => html: string,
//  )
//
export function formatUserOrError(userPromise, getAccount, formatHtml, formatError) {

    // TODO thread userPromise through getAccount
    const accountPromise = userPromise.then(getAccount);

    // TODO combine promises for formatHtml
    return Promise.all([userPromise, accountPromise])
	.then(([user, account]) => {
	    return formatHtml(user, account);
	})
	.catch((e) => formatError(e))

  // TODO return final promise

  // TODO ensure all errors, from all sources, will end up at formatError
}
