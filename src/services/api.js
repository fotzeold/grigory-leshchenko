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


export { getInfo }