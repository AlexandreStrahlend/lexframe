class Negociacao {

	constructor(data, quantidade, valor) {
		this._data = new Date()
		if(data){
			this._data.setDate(data)
		}
		this._quantidade = quantidade
		this._valor = valor
		this._volume = this.obterVolume()
		Object.freeze(this)

	}

	// Acessores

	get data() {
		return new Date(this._data.getTime())
	}

	get quantidade() {
		return this._quantidade
	}

	get valor() {
		return this._valor
	}

	get volume() {
		return this._volume
	}

	obterVolume() {

		return this._quantidade * this._valor

	}

}