export const Hooray = {
	create() {
		const hooray = []

		Object.defineProperties(hooray, {
			get: {
				enumerable: false,
				value(...params) {
					return Hooray.get(this, ...params)
				},
			},

			set: {
				value(...params) {
					return Hooray.set(this, ...params)
				},
			},
		})

		return hooray
	},

	get(collection, ...rest) {
		const path = rest.slice(0, -1)
		const key = rest.slice(-1)[0]

		let current = collection
		for(let i = 0; i < path.length; i++) {
			const chunk = path[i]
			if (!current[chunk])
				current[chunk] = []
			current = current[chunk]
		}

		return current[key]
	},

	set(collection, ...rest) {
		const path = rest.slice(0, -2)
		const key = rest.slice(-2, -1)[0]
		const value = rest.slice(-1)[0]

		let current = collection
		for(let i = 0; i < path.length; i++) {
			const chunk = path[i]
			if (!current[chunk])
				current[chunk] = []
			current = current[chunk]
		}
		current[key] = value
	},
}