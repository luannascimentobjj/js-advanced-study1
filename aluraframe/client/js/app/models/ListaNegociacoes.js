class ListaNegociacoes{

    constructor(){
        this._negociacoes = [];
    }

    adicona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //criando uma cópia do array, array defensivo
        return [].concat(this._negociacoes);
    }

}