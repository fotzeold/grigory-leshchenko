import info from "../data/info.json"

function getInfo(param) {
	switch (param) {
		case "books":
			return info.books
		case "message":
			return info.message
		case "blog":
			return info.blog
	}
}

async function getLetter(url) {
	try {
		let res = await fetch(url)
		let data = res.text()
		return data
	} catch (error) {
		return error
	}
}


export { getInfo, getLetter }