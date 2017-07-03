class DateHelper {

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }

   static dataParaTexto(data) {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }

   static textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        
        //let data = new Date(this._inputData.value.split('-'));
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
    }


}