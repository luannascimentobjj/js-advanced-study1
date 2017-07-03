class DateHelper {

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }

   static dataParaTexto(data) {
        //utilizando template string
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        
        // data.getDate() + '/' + (data.getMonth() + 1)  + '/' + data.getFullYear();  - concatenando normal
    }

   static textoParaData(texto) {

       if(!/\d{4}-\d{2}-\d{2}/.text(texto)) throw new Error('Deve estar no formato yyyy-mm-dd');
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); //spreadOperator (...)
        /**
            let data = new Date(this._inputData.value.split('-')); // outras formas de fazer
            let data = new Date(this._inputData.value.replace(/-/g, ','));
        */
    }


}