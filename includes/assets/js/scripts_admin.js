jQuery(document).ready(function($){

    function getSearchParams(k){
 var p={};
 location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
 return k?p[k]:p;
}

    var id = getSearchParams("post"); 

    list_dados_roteiro(id);

	$("#hoteisdiv").attr("style", "display:none");
	$("#aptosdiv").attr("style", "display:none");
    $("#regimediv").attr("style", "display:none");
    $(".cx-control__description").attr("style", "display:none");
    $('.cx-control[data-control-name="valor_taxa"]').attr("style", "max-width: 18% !important;flex: 0 0 24% !important;"); 
    $('.cx-control[data-control-name="dias"]').attr("style", "max-width: 16% !important;flex: 0 0 17% !important;"); 
    $('.cx-control[data-control-name="noites"]').attr("style", "max-width: 16% !important;flex: 0 0 17% !important;"); 
    $('.cx-control[data-control-name="tipo_roteiro"]').attr("style", "max-width: 49% !important;flex: 0 0 46% !important;"); 
    $(".cx-control-radio .cx-control__info").attr("style", "margin-right:-37px");
    $(".cx-radio-group").attr("style", "display:flex; margin-right: -65%;");
    $(".cx-radio-item").attr("style", "margin-right: 10px;");
    $('.cx-control[data-control-name="nome_tarifario_ptt"]').attr("style", "display:none;"); 
    $('.cx-control[data-control-name="acomodacoes-repeater"]').attr("style", "display:none;"); 
    $("#valor_taxa, #valor_single, #valor_duplo, #valor_triplo, #valor_crianca1, #valor_crianca2, #valor_bebe, #valor_single_extra, #valor_duplo_extra, #valor_triplo_extra, #valor_chd1_extra, #valor_chd2_extra, #valor_bebe_extra").addClass("money");

    $(".tarifario").html('<div class="cx-ui-kit__content cx-settings__content" role="group" id="tarifario"> <div id="repeater_div_tarifario_tarifa" style="padding-bottom: 10px;margin-bottom: 10px;"><div class="container holder_tarifa" style=""><div class="row" style=""><div class="" style=" border-bottom: 3px solid #eee;padding: 12px;width: 100%;"><button type="button" class="button add_attribute" style="float: right;" onclick="adicionar_novo_tarifario_tarifa()">Adicionar tarifário</button></div></div> <div class="row repeater_tarifario" style="padding: 11px 10px;"><h4 style="color: #888;border-bottom: ridge;padding-bottom: 6px;width: 100%;margin-bottom: 12px;">Novo tarifário </h4><div class="" data-control-name="nome_tarifario" style="width: 46%;margin-right: 4%;display: flex;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner" style="padding: 15px 0px;">Nome</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><input type="text" id="nome_tarifario" class="widefat cx-ui-text" name="nome_tarifario2500" value="" placeholder="" autocomplete="on"></div></div></div><div class="" data-control-name="tipo_tarifario" style="width: 50%;display: flex;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner" style="padding: 15px 0px;">Tipo</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container " style="padding-top:6px"><div class="cx-radio-group"><div class="cx-radio-item"><input type="radio" id="tipo_tarifario-0" class="cx-radio-input" name="tipo_tarifario2500" value="0"><label for="tipo_tarifario-0" style="margin-right:4%"><span class="cx-lable-content"><span class="cx-radio-item"><i></i></span>Cotação</span></label> <input type="radio" id="tipo_tarifario-1" class="cx-radio-input" name="tipo_tarifario2500" value="1"><label for="tipo_tarifario-1"><span class="cx-lable-content"><span class="cx-radio-item"><i></i></span>Reserva</span></label> </div><div class="clear"></div></div></div></div></div><div class="" data-control-name="moeda" style="width: 25%;margin-right: 4%;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner">Moeda</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><div class="cx-ui-select-wrapper"><select id="moeda" class="cx-ui-select" name="moeda2500" size="1" data-filter="false" data-placeholder="" style="width: 100%"> <option value="" selected="">Selecione...</option> <option value="R$">R$ - Real</option><option value="AU$">AU$ - Dólar australiano</option><option value="GBP">GBP - Libra esterlina</option><option value="$">$ - Dólar canadense</option><option value="USD">USD - Dólar americano</option><option value="EUR">EUR - Euro</option></select></div></div></div></div><div class="" data-control-name="data_inicial" style="margin-right: 4%;width: 30%;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner">Data Inicial</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><input type="text" id="data_inicial2500" class="widefat cx-ui-text" name="data_inicial2500" value="" placeholder="" autocomplete="on"></div></div></div><div class="" data-control-name="data_final" style="width: 30%;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner">Data final</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><input type="text" id="data_final2500" class="widefat cx-ui-text" name="data_final2500" value="" placeholder="" autocomplete="on"></div></div></div></div> </div></div> <div class="container listing_blocos_tarifas_cadastrados" style="margin-bottom:5px;"><img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height:10px;margin-right:3px;"> Aguarde... Carregando tarifários.</div></div> '); 
    $(".tarifario").append('<script type="text/html" id="tmpl-wc-add-tarifario-row" > <div class="row repeater_tarifario" id="holder_remover_tarifario{{(data.key)}}" style="padding: 11px 10px;"><h4 style="color: #888;border-bottom: ridge;padding-bottom: 6px;width: 100%;margin-bottom: 12px;">Novo tarifário <a onclick="remove_div_tarifario_tarifa(\'{{(data.key)}}\')" style="cursor: pointer;"><i class="fas fa-trash-alt" style="float: right;color: #e01717;"></i></a></h4><div class="" data-control-name="nome_tarifario" style="width: 46%;margin-right: 4%;display: flex;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner" style="padding: 15px 0px;">Nome</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><input type="text" id="nome_tarifario" class="widefat cx-ui-text" name="nome_tarifario{{(data.key)}}" value="" placeholder="" autocomplete="on"></div></div></div><div class="" style="width: 50%;display: flex;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner" style="padding: 15px 0px;">Tipo</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container " style="padding-top:6px"><div class="cx-radio-group"><div class="cx-radio-item"><input type="radio" class="cx-radio-input" name="tipo_tarifario{{(data.key)}}" value="0"><label style="margin-right:4%"><span class="cx-lable-content"><span class="cx-radio-item"><i></i></span>Cotação</span></label> <input type="radio" class="cx-radio-input" name="tipo_tarifario{{(data.key)}}" value="1"><label><span class="cx-lable-content"><span class="cx-radio-item"><i></i></span>Reserva</span></label> </div><div class="clear"></div></div></div></div></div><div class="" data-control-name="moeda" style="width: 25%;margin-right: 4%;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner">Moeda</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><div class="cx-ui-select-wrapper"><select id="moeda" class="cx-ui-select" name="moeda{{(data.key)}}" size="1" data-filter="false" data-placeholder="" style="width: 100%"> <option value="" selected="">Selecione...</option> <option value="R$">R$ - Real</option><option value="AU$">AU$ - Dólar australiano</option><option value="GBP">GBP - Libra esterlina</option><option value="$">$ - Dólar canadense</option><option value="USD">USD - Dólar americano</option><option value="EUR">EUR - Euro</option></select></div></div></div></div><div class="" data-control-name="data_inicial" style="margin-right: 4%;width: 30%;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner">Data Inicial</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><input type="text" id="data_inicial{{(data.key)}}" class="widefat cx-ui-text" name="data_inicial{{(data.key)}}" value="" placeholder="" autocomplete="on"></div></div></div><div class="" data-control-name="data_final" style="width: 30%;"><div class="cx-control__info"><div class="h4-style cx-ui-kit__title cx-control__title" role="banner">Data final</div></div><div class="cx-ui-kit__content cx-control__content" role="group"><div class="cx-ui-container "><input type="text" id="data_final{{(data.key)}}" class="widefat cx-ui-text" name="data_final{{(data.key)}}" value="" placeholder="" autocomplete="on"></div></div></div></div> </script>')

    $(".acomodacoes2").addClass("holder_div_tarifario");
    $(".acomodacoes2").html('<div class="cx-ui-kit__content cx-settings__content" role="group" id="acomodacoes2"> <div id="repeater_div_tarifario" style="padding-bottom: 10px;margin-bottom: 10px;"><div class="container holder" style=""><div class="row" style=""><div class="" style=" border-bottom: 3px solid #eee;padding: 12px;width: 100%;"><button type="button" class="button add_attribute" style="float: right;" onclick="adicionar_novo_tarifario()">Adicionar acomodação</button></div></div>  <div class="repeater_tarifa" id="hold_remove_tarifa2500"> <div class="row" style="padding-top: 10px"> <div class="col-12" style="padding: 0px 10px;"> <h4 style="color: #888;border-bottom: ridge;padding-bottom: 6px;">Nova acomodação </h4> </div></div><div class="row" style="padding-top: 10px"> <div class="col-2" style="padding: 10px"> <label><span style="color:#555">Tarifário</span></label> </div><div class="col-4"> <select name="tarifario_option2500" id="tarifario_option2500" class="form-control"> <option value="" selected>Selecione...</option> </select> </div><div class="col-2" style="padding: 10px"> <label><span style="color:#555">Regime</span></label> </div><div class="col-4"> <select name="regime_roteiro2500" id="regime_roteiro2500" class="form-control"> <option value="" selected>Selecione...</option> </select> </div></div><div class="row" style="padding-top: 10px"> <div class="col-2" style="padding: 10px"> <label><span style="color:#555">Hotel</span></label> </div><div class="col-4"> <select name="hotel_roteiro2500" id="hotel_roteiro2500" class="form-control" onchange="alter_apto_hotel(\'2500\')"> <option value="" selected>Selecione...</option> </select> </div><div class="col-2" style="padding: 10px"> <label><span style="color:#555">Apartamento</span></label> </div><div class="col-4"> <select name="apto_roteiro2500" id="apto_roteiro2500" class="form-control" disabled> <option value="" selected>Selecione um hotel</option> </select> <div class="" id="loading2500" style="display: none;padding: 10px 0px;"> <span><small><img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height:10px;margin-right:3px;"> Aguarde...</small></span> </div></div></div><div class="row" style="padding-top: 10px"> <div class="col-12" style="padding: 0px"> <table style="border: 1px solid #b9b9b9;margin: 12px;border-spacing: 15px 10px;border-collapse: collapse;"> <thead> <th style="padding: 16px 10px;"></th> <th style=";text-align: left">Single</th> <th style="text-align: left;">Duplo</th> <th style="text-align: left;">Triplo</th> <th style=";text-align: left">Criança 1</th> <th style="text-align: left;">Criança 2</th> <th style="text-align: left;">Bebê</th> </thead> <tbody> <tr style="border: 1px solid #bdbdbd;"> <td style="padding: 8px 12px;width: 19%">Valor da diária </td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_single2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_duplo2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_triplo2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca12500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca22500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_bebe2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td></tr><tr style="border: 1px solid #bdbdbd;"> <td style="padding: 8px 12px;">Noite extra </td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_single_extra2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_duplo_extra2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_triplo_extra2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca1_extra2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca2_extra2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_bebe_extra2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td></tr><tr style="display: none;border: 1px solid #bdbdbd;background-color: #f1f1f1;" class="linha_taxa"> <td style="padding: 8px 12px;">Tx. de embarque </td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="taxa_embarque_roteiro2500" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td></tr></tbody> </table> </div></div></div></div> <div class="listing_blocos_cadastrados" style="margin-bottom:5px;"><img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height:10px;margin-right:3px;"> Aguarde... Carregando acomodações.</div> </div> '); 

    $(".acomodacoes2").append('<script type="text/html" id="tmpl-wc-add-tarifa-row" > <div class="repeater_tarifa" id="hold_remove_tarifa{{(data.key)}}"> <div class="row" style="padding-top: 10px"> <div class="col-12" style="padding: 0px 10px;"> <h4 style="color: #888;border-bottom: ridge;padding-bottom: 6px;">Nova acomodação <a onclick="remove_div_tarifario(\'{{(data.key)}}\')" style="cursor: pointer;"><i class="fas fa-trash-alt" style="float: right;color: #e01717;"></i></a></h4> </div></div> <div class="row" style="padding-top: 10px"> <div class="col-2" style="padding: 10px"> <label><span style="color:#555">Tarifário</span></label> </div><div class="col-4"> <select name="tarifario_option{{(data.key)}}" id="tarifario_option{{(data.key)}}" class="form-control"> <option value="" selected>Selecione...</option> </select> </div> <div class="col-2" style="padding: 10px"> <label><span style="color:#555">Regime</span></label> </div><div class="col-4"> <select name="regime_roteiro{{(data.key)}}" id="regime_roteiro{{(data.key)}}" class="form-control"> <option value="" selected>Selecione...</option> </select> </div></div> <div class="row" style="padding-top: 10px"> <div class="col-2" style="padding: 10px"> <label><span style="color:#555">Hotel</span></label> </div><div class="col-4"> <select name="hotel_roteiro{{(data.key)}}" id="hotel_roteiro{{(data.key)}}" class="form-control" onchange="alter_apto_hotel(\'{{(data.key)}}\')"> <option value="" selected>Selecione...</option> </select> </div><div class="col-2" style="padding: 10px"> <label><span style="color:#555">Apartamento</span></label> </div><div class="col-4"> <select name="apto_roteiro{{(data.key)}}" id="apto_roteiro{{(data.key)}}" class="form-control" disabled> <option value="" selected>Selecione um hotel</option> </select> <div class="" id="loading{{(data.key)}}" style="display: none;padding: 10px 0px;"> <span><small><img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height:10px;margin-right:3px;"> Aguarde...</small></span> </div></div></div> <div class="row" style="padding-top: 10px"> <div class="col-12" style="padding: 0px"> <table style="border: 1px solid #b9b9b9;margin: 12px;border-spacing: 15px 10px;border-collapse: collapse;"> <thead> <th style="padding: 16px 10px;"></th> <th style=";text-align: left">Single</th> <th style="text-align: left;">Duplo</th> <th style="text-align: left;">Triplo</th> <th style=";text-align: left">Criança 1</th> <th style="text-align: left;">Criança 2</th> <th style="text-align: left;">Bebê</th> </thead> <tbody> <tr style="border: 1px solid #bdbdbd;"> <td style="padding: 8px 12px;width: 19%">Valor da diária </td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_single{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_duplo{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_triplo{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca1{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca2{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_bebe{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td></tr><tr style="border: 1px solid #bdbdbd;"> <td style="padding: 8px 12px;">Noite extra </td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_single_extra{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_duplo_extra{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_triplo_extra{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca1_extra{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_crianca2_extra{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="valor_bebe_extra{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td></tr><tr style="display: none;border: 1px solid #bdbdbd;background-color: #f1f1f1;" class="linha_taxa"> <td style="padding: 8px 12px;">Tx. de embarque </td><td style="padding: 8px 8px 8px 0px;"><input type="text" name="taxa_embarque_roteiro{{(data.key)}}" placeholder="" class="form-control money" style="font-size: 13px" autocomplete="off" value="0,00" onclick="this.value=\'0,00\'"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td><td style="padding: 8px 8px 8px 0px;"></td></tr></tbody> </table> </div></div></div></script>')

	$('.money').mask('00.000.000,00', {
	    reverse: true
	});

    jQuery(function($){
        $.datepicker.regional['pt-BR'] = {
                closeText: 'Fechar',
                prevText: '&#x3c;Anterior',
                nextText: 'Pr&oacute;ximo&#x3e;',
                currentText: 'Hoje',
                monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
                'Jul','Ago','Set','Out','Nov','Dez'],
                dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
                dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
                dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
                weekHeader: 'Sm',
                dateFormat: 'dd/mm/yy',
                firstDay: 0,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});
 
    $('#data_inicial2500')
    .datepicker({
      language: 'pt-BR',
      locale: 'pt-BR',
      minDate: new Date(),
      autoClose: true,
      dateFormat: 'dd/mm/yy',
        onSelect: function (selectedDate) {
            //Limpamos a segunda data, para evitar problemas do usuário ficar trocando a data do primeiro datepicker e acabar burlando as regras definidas.
            $.datepicker._clearDate($("#data_final2500"));
            //Aqui está a "jogada" para somar os 7 dias para o próximo datepicker.
            var data = $.datepicker.parseDate('dd/mm/yy', selectedDate); 
            $("#data_final2500").datepicker("option", "minDate", data); //Aplica a data
        }
    });
    $('#data_final2500')
    .datepicker({
      language: 'pt-BR', 
      autoClose: true,
      dateFormat: 'dd/mm/yy',
    });

    

    

	$(".idade").mask("00/00");
	$(".idade").mask("00/00");
	$(".dias").mask("00");

	

});

jQuery('.money').mask('00.000.000,00', {
        reverse: true
    });



function atualiza_dados_hotel(key){
    var valor_hotel = jQuery("#hotel_roteiro"+key).val(); 
    var valor_apto = jQuery("#id_apto_roteiro"+key).val(); 

    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "edit_apto_hotel", valor_hotel: valor_hotel, valor_apto: valor_apto },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery("#apto_roteiro"+key).html(retorno);
        }
    });
}

function preenche_select_hotel(id, i){ 
    console.log(id);

    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_hotel", id:id },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery("#hotel_roteiro"+i).html(retorno); 

            //preenche_select_apto(id, i);
        }
    });
} 

function preenche_select_tarifario(id, i){ 

    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_tarifario", id:id, i:i },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery("#tarifario_option"+i).html(retorno); 
        }
    });
}

function preenche_select_regime(id, i){ 

    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_regime", id:id, i:i },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery("#regime_roteiro"+i).html(retorno); 
        }
    });
}


function alter_apto_hotel(contador){
	var valor_hotel = jQuery("#hotel_roteiro"+contador).val();
    jQuery("#loading"+contador).attr("style", "padding:10px 0px");
 
	jQuery("#apto").prop("disabled");
	jQuery("#apto").attr("disabled", "disabled");

	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_apto_hotel", valor_hotel: valor_hotel },
        success: function( data ) {
            var retorno = data.slice(0,-1);
            jQuery("#loading"+contador).attr("style", "display:none;padding:10px 0px");

            jQuery("#apto_roteiro"+contador).html(retorno);
            jQuery("#apto_roteiro"+contador).removeAttr("disabled"); 
        }
    });
}

function list_tarifarios_loop(id){

    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_tarifarios_loop", id:id },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery(".listing_blocos_cadastrados").html(retorno);

            preenche_select_tarifario(id, 2500);
    preenche_select_regime(id, 2500);
    preenche_select_hotel(id, 2500); 
        }
    });
}

function list_dados_roteiro(id){
    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_dados_roteiro", id:id },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery("#roteiros").html(retorno);
             list_tarifas_loop(id)
        }
    });
}

function list_tarifas_loop(id){

    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_tarifas_loop", id:id },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery(".listing_blocos_tarifas_cadastrados").html(retorno);
             list_tarifarios_loop(id)
        }
    });
}

function div_linha_taxa(tipo){
	if (tipo == 0) {
		jQuery(".linha_taxa").attr("style", "border: 1px solid #bdbdbd;background-color: #f1f1f1;");
	}else{
		jQuery(".linha_taxa").attr("style", "display: none;border: 1px solid #bdbdbd;background-color: #f1f1f1;");
	}
}

function getSearchParamsR(k){
 var p={};
 location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
 return k?p[k]:p;
}



function adicionar_novo_tarifario(){
    for (var i = 1; i < 21; i++) {
        jQuery(".tabela_tarifa_cadastro"+i).attr("style", "display:none");
    }

	var iti_index = jQuery(".repeater_tarifa").length + 1;

                var template = wp.template("wc-add-tarifa-row"); 

    jQuery("#repeater_div_tarifario .holder").append(template({ key: iti_index }));  

    var id = getSearchParamsR("post"); 

    preenche_select_tarifario(id, iti_index);
    preenche_select_regime(id, iti_index);
    preenche_select_hotel(id, iti_index); 

    jQuery('.money').mask('00.000.000,00', {
        reverse: true
    });
}

function adicionar_novo_tarifario_tarifa(){
    for (var i = 1; i < 21; i++) {
        jQuery(".tabela_tarifario_cadastro"+i).attr("style", "display:none");
    }

    var iti_index = jQuery(".repeater_tarifario").length + 1;

                var template = wp.template("wc-add-tarifario-row"); 

    jQuery("#repeater_div_tarifario_tarifa .holder_tarifa").append(template({ key: iti_index }));  

    jQuery('#data_inicial'+iti_index)
    .datepicker({
      language: 'pt-BR',
      locale: 'pt-BR',
      minDate: new Date(),
      autoClose: true,
      dateFormat: 'dd/mm/yy',
        onSelect: function (selectedDate) {
            //Limpamos a segunda data, para evitar problemas do usuário ficar trocando a data do primeiro datepicker e acabar burlando as regras definidas.
            jQuery.datepicker._clearDate(jQuery("#data_final"+iti_index));
            //Aqui está a "jogada" para somar os 7 dias para o próximo datepicker.
            var data = jQuery.datepicker.parseDate('dd/mm/yy', selectedDate); 
            jQuery("#data_final"+iti_index).datepicker("option", "minDate", data); //Aplica a data
        }
    });
    jQuery('#data_final'+iti_index)
    .datepicker({
      language: 'pt-BR', 
      autoClose: true,
      dateFormat: 'dd/mm/yy',
    });
}

function remove_div_tarifario(key){
    jQuery("#hold_remove_tarifa"+key).remove();
}

function remove_div_tarifario_tarifa(key){
    jQuery("#holder_remover_tarifario"+key).remove();
}

function exibe_div_tarifario(key){
    for (var i = 1; i < 21; i++) {
        if (i !== key) {
            jQuery(".tabela_tarifa_cadastro"+i).attr("style", "padding-top: 10px;display:none");
        }
    } 
    jQuery(".tabela_tarifa_cadastro"+key).attr("style", "padding-top: 10px;");
    jQuery('.money').mask('00.000.000,00', {
        reverse: true
    });
}

function show_dados_tarif(key){
    for (var i = 0; i < 21; i++) { 
        jQuery(".div_dados_tarifario_nome"+i).attr("style", "display:none");
        jQuery(".div_dados_tarifariotipo"+i).attr("style", "display:none");
        jQuery(".div_dados_tarifariomoeda"+i).attr("style", "display:none");
        jQuery(".div_dados_tarifario_dataini"+i).attr("style", "display:none");
        jQuery(".div_dados_tarifario_datafim"+i).attr("style", "display:none"); 
    }
    jQuery(".div_dados_tarifario_nome"+key).attr("style", "width: 46%;margin-right: 4%;display: flex;");
    jQuery(".div_dados_tarifariotipo"+key).attr("style", "width: 50%;display: flex;");
    jQuery(".div_dados_tarifariomoeda"+key).attr("style", "width: 25%;margin-right: 4%;");
    jQuery(".div_dados_tarifario_dataini"+key).attr("style", "margin-right: 4%;width: 30%;");
    jQuery(".div_dados_tarifario_datafim"+key).attr("style", "width: 30%;"); 
}

function importar_roteiros(){

    swal({
        title: "Importação iniciada.",
        text: 'A página será recarregada assim que a importação finalizar.',
        buttons: false,
        closeOnClickOutside: false,
        content: "html",
        icon: "success",
    }); 

    setTimeout( function() { 

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.traveltec.com.br/serv/packages/import_manual",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "bdf8e11f-aa33-dfc7-c3ef-3d2f8c1d19fb"
          }
        } 

        jQuery.ajax(settings).done(function (response) {
            window.location.reload();
        });   

    }, 700 );

}