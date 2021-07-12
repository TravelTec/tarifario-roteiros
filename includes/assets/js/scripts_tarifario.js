function show_div_tarifario(data){
	jQuery(".div_tarifario_data").attr("style", "display:none"); 
	jQuery("#div_tarifario_data_"+data.replace("/", "-").replace("/", "-")).attr("style", "margin-bottom: 20px;padding: 0;");
	jQuery("#div_tarifario_bloco_data_"+data.replace("/", "-").replace("/", "-")).attr("style", "");
	jQuery("#div_bloco_form_geral_"+data.replace("/", "-").replace("/", "-")).attr("style", "display:block !important");
	jQuery("#date_div_tarifario_data_"+data.replace("/", "-").replace("/", "-")).toggle(1000);
	jQuery("#text_div_tarifario_data_"+data.replace("/", "-").replace("/", "-")).toggle(1000);
	jQuery("#select_div_tarifario_data").attr("style", "margin-top:20px;margin-bottom:26px;");

	jQuery('.count_adt1').val(2);
	jQuery('.count_chd1').val(0); 
	jQuery('.idade_chd1').attr("style", "padding: 6px 0px;display:none");
	jQuery("#contador_rooms").val(1); 
	jQuery(".copy_quartos2").remove();
	jQuery(".copy_quartos3").remove();
	jQuery(".copy_quartos4").remove();
	jQuery(".copy_quartos5").remove();

	var date = new Date();
	var currentMonth = date.getMonth();
	var currentDate = date.getDate();
	var currentYear = date.getFullYear();
	var add_days = parseInt(jQuery(".noites_pacote"+data.replace("/", "-").replace("/", "-")).val())+1;
	jQuery('#field_checkin').daterangepicker({ 

		singleDatePicker: true,
		showDropdowns: true,
		autoApply: true,
		startDate: jQuery(".data_inicial_selecionada_"+data.replace("/", "-").replace("/", "-")).val(),  
		endDate: moment(jQuery(".data_inicial_selecionada_"+data.replace("/", "-").replace("/", "-")).val(), "DD-MM-YYYY").add(add_days, 'days'),  
		minDate: jQuery(".data_inicial_selecionada_"+data.replace("/", "-").replace("/", "-")).val(),  
	        locale: {
	            format: 'DD/MM/YYYY',
	    "applyLabel": "Aplicar",
	    "cancelLabel": "Cancelar",
	    "fromLabel": "De",
	    "toLabel": "Até",
	    "customRangeLabel": "Custom",
	    "daysOfWeek": [
	        "Dom",
	        "Seg",
	        "Ter",
	        "Qua",
	        "Qui",
	        "Sex",
	        "Sáb"
	    ],
	    "monthNames": [
	        "Janeiro",
	        "Fevereiro",
	        "Março",
	        "Abril",
	        "Maio",
	        "Junho",
	        "Julho",
	        "Agosto",
	        "Setembro",
	        "Outubro",
	        "Novembro",
	        "Dezembro"
	    ],
	        }
	}, function(start, end, label) {
		jQuery("#data_form_"+data.replace("/", "-").replace("/", "-")).val(start.format('DD-MM-YYYY'));
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD'));

    jQuery('#field_checkout').daterangepicker({ 

		singleDatePicker: true,
		showDropdowns: true,
		autoApply: true,
		startDate: jQuery("#data_form_"+data.replace("/", "-").replace("/", "-")).val(),   
		minDate: jQuery("#data_form_"+data.replace("/", "-").replace("/", "-")).val(),  
	        locale: {
	            format: 'DD/MM/YYYY',
	    "applyLabel": "Aplicar",
	    "cancelLabel": "Cancelar",
	    "fromLabel": "De",
	    "toLabel": "Até",
	    "customRangeLabel": "Custom",
	    "daysOfWeek": [
	        "Dom",
	        "Seg",
	        "Ter",
	        "Qua",
	        "Qui",
	        "Sex",
	        "Sáb"
	    ],
	    "monthNames": [
	        "Janeiro",
	        "Fevereiro",
	        "Março",
	        "Abril",
	        "Maio",
	        "Junho",
	        "Julho",
	        "Agosto",
	        "Setembro",
	        "Outubro",
	        "Novembro",
	        "Dezembro"
	    ],
	        }
	});
  }); 

	
 

	jQuery('#field_checkin').on('cancel.daterangepicker', function(ev, picker) {
      jQuery(this).val('');
  });
	
} 
jQuery(document).ready(function(){ 

	jQuery('#field_checkin').daterangepicker({ 

		singleDatePicker: true,
		showDropdowns: true,
		autoApply: true, 
		minDate: moment(new Date(), "DD/MM/YYYY"),  
	        locale: {
	            format: 'DD/MM/YYYY',
	    "applyLabel": "Aplicar",
	    "cancelLabel": "Cancelar",
	    "fromLabel": "De",
	    "toLabel": "Até",
	    "customRangeLabel": "Custom",
	    "daysOfWeek": [
	        "Dom",
	        "Seg",
	        "Ter",
	        "Qua",
	        "Qui",
	        "Sex",
	        "Sáb"
	    ],
	    "monthNames": [
	        "Janeiro",
	        "Fevereiro",
	        "Março",
	        "Abril",
	        "Maio",
	        "Junho",
	        "Julho",
	        "Agosto",
	        "Setembro",
	        "Outubro",
	        "Novembro",
	        "Dezembro"
	    ],
	        }
	}, function(start, end, label) {
		jQuery("#data_form").val(start.format('DD-MM-YYYY'));
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD'));

    var checkout = moment(new Date(), "DD/MM/YYYY"); 

    jQuery('#field_checkout').daterangepicker({ 

		singleDatePicker: true,
		showDropdowns: true,
		autoApply: true,
		startDate: jQuery("#data_form").val(),   
		minDate: jQuery("#data_form").val(),  
	        locale: {
	            format: 'DD/MM/YYYY',
	    "applyLabel": "Aplicar",
	    "cancelLabel": "Cancelar",
	    "fromLabel": "De",
	    "toLabel": "Até",
	    "customRangeLabel": "Custom",
	    "daysOfWeek": [
	        "Dom",
	        "Seg",
	        "Ter",
	        "Qua",
	        "Qui",
	        "Sex",
	        "Sáb"
	    ],
	    "monthNames": [
	        "Janeiro",
	        "Fevereiro",
	        "Março",
	        "Abril",
	        "Maio",
	        "Junho",
	        "Julho",
	        "Agosto",
	        "Setembro",
	        "Outubro",
	        "Novembro",
	        "Dezembro"
	    ],
	        }
	});

	var url_atual = window.location;

    if(url_atual.pathname == "/"){ 
		list_categories_posts();
	}

	var url = window.location.href;

    if(url.indexOf("/hospedagens/") != -1){ 
		jQuery(".elementor-button-link").removeAttr("href");
		jQuery(".elementor-button-link").attr("onclick", "set_cotacao_hotel()");
		jQuery(".elementor-button-link").attr("style", "color:#fff");
	}
	jQuery(".button-form-roteiros").attr("onclick", "list_posts()");

	jQuery(".button-form-aereo").attr("onclick", "set_cotacao_aereo()");
	jQuery(".button-form-hospedagem").attr("onclick", "set_cotacao_hotel()");
	jQuery(".button-form-veiculos").attr("onclick", "set_cotacao_veiculos()");
	jQuery(".cotar-seguro").attr("onclick", "set_cotacao_seguro()");

	jQuery(".submit-form-news").attr("onclick", "submit_form_revenda()");
	jQuery("#field_nome").attr("autocomplete", "off");
	jQuery("#field_email").attr("autocomplete", "off");

	jQuery("#field_Origem").attr("autocomplete", "off"); 
	jQuery("#field_Destino").attr("autocomplete", "off");
	
	jQuery("#field_destino").attr("autocomplete", "off");
	
	jQuery("#field_retirada").attr("autocomplete", "off");
	jQuery("#field_devolver").attr("autocomplete", "off");
	
	jQuery("#field_Destino").attr("autocomplete", "off");

	jQuery("#billing_phone").mask("(00) 00000-0000"); 
	jQuery(".woocommerce-message").attr("style", "display:none");

	jQuery(".telefone").mask("(00) 00000-0000");

	jQuery(".product-quantity").attr("style", "display:none");
	jQuery(".woocommerce-message").attr("style", "display:none");

	jQuery('.input_data').daterangepicker({ 
		startDate: "01-07-2021",
		endDate: "10-07-2021",
	    locale: {
	    	format: 'DD/MM/YYYY',
		    "applyLabel": "Aplicar",
		    "cancelLabel": "Cancelar",
		    "fromLabel": "De",
		    "toLabel": "Até",
		    "customRangeLabel": "Custom",
		    "daysOfWeek": [
		        "Dom",
		        "Seg",
		        "Ter",
		        "Qua",
		        "Qui",
		        "Sex",
		        "Sáb"
		    ],
		    "monthNames": [
		        "Janeiro",
		        "Fevereiro",
		        "Março",
		        "Abril",
		        "Maio",
		        "Junho",
		        "Julho",
		        "Agosto",
		        "Setembro",
		        "Outubro",
		        "Novembro",
		        "Dezembro"
		    ],
	    }
	});
  }); 

	
 

	jQuery('#field_checkin').on('cancel.daterangepicker', function(ev, picker) {
      jQuery(this).val('');
  });

	var data = jQuery("#data_final_periodo_selecionado").val();  

	function getSearchParams(k){
	 	var p={};
	 	location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
	 	return k?p[k]:p;
	}

    var category_name = getSearchParams("category_name"); 
    var checkin = getSearchParams("field_checkin"); 
    var checkout = getSearchParams("field_Checkout"); 
    if (category_name != '') {
    	list_posts_page_destin(category_name, checkin, checkout);
    } 

	

});

function list_posts_page_destin(category, checkin, checkout){
	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_posts_page_destin", category:category, checkin:checkin, checkout:checkout },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery("#content .nv-content-none-wrap").html(retorno); 

            //preenche_select_apto(id, i);
        }
    });
}


function show_div_count(){
	jQuery(".dropdown").toggle(500);

	var contador_rooms = jQuery("#contador_rooms").val();
	contador_rooms = parseInt(contador_rooms)+1; 

	var qtd_total_adt = 0;
	var qtd_total_chd = 0;
	for (var i = 1; i < contador_rooms; i++) {
		qtd_total_adt += parseInt(jQuery(".count_adt"+i).val());
		qtd_total_chd += parseInt(jQuery(".count_chd"+i).val());
	}

	jQuery(".count_adultos").html("<strong>"+qtd_total_adt+" "+(qtd_total_adt > 1 ? 'adultos' : 'adulto')+"</strong>");
	jQuery(".count_criancas").html("<strong>"+qtd_total_chd+" "+(qtd_total_chd > 0 ? 'crianças' : 'criança')+"</strong>");
	jQuery(".count_quartos").html("<strong>"+(parseInt(contador_rooms)-1)+" "+(parseInt(contador_rooms)-1 > 1 ? 'quartos' : 'quarto')+"</strong>");
}


function show_div_count_atualizar(){
	var data_id_div = jQuery("#field_checkin").val().replace("/", "-").replace("/", "-");

	var data_checkin = jQuery("#field_checkin").val();
	var data_checkout = jQuery("#field_checkout").val();

	var loop_data_checkin = JSON.parse(jQuery("#datas_inicial").val());  
	var loop_data_checkout = JSON.parse(jQuery("#datas_final").val());  

	var contador_tarifas = 0;
	for (var x = 0; x < loop_data_checkin.length; x++) {
		jQuery(".div_tarifario_data_"+loop_data_checkin[x].replace("/", "-").replace("/", "-")).attr("style", "display:none");

		if (moment(jQuery("#field_checkin").val(), "DD/MM/YYYY") >= moment(loop_data_checkin[x], "DD/MM/YYYY") && moment(jQuery("#field_checkout").val(), "DD/MM/YYYY") <= moment(loop_data_checkout[x], "DD/MM/YYYY")) {
			contador_tarifas = contador_tarifas+1;
			
			data_id_div = loop_data_checkin[x].replace("/", "-").replace("/", "-");
		} 
	} 

	jQuery(".div_tarifario_data_"+data_id_div).attr("style", "");

	if (contador_tarifas == 0) {
		swal({
            title: "Nenhuma tarifa encontrada para o período selecionado.",
            icon: "warning",
        }); 
    }else{

		var json_quartos = JSON.parse(jQuery("#tarifa_atualizar_valor_"+data_id_div).val());  

		var contador_rooms = jQuery("#field_quartos").val();
		contador_rooms = parseInt(contador_rooms)+1; 

		var qtd_total_adt = parseInt(jQuery("#field_adt").val());
		var qtd_total_chd = parseInt(jQuery("#field_chd").val());

		/******************************************************************************/
		var data = jQuery('#data_selecionada').val();
		data = data.split(" - ");
		var data_inicio = data[0].split("/");
		data_inicio = data_inicio[2]+"-"+data_inicio[1]+"-"+data_inicio[0];
		var data_fim = data[1].split("/");
		data_fim = data_fim[2]+"-"+data_fim[1]+"-"+data_fim[0];
		var data_inicial_periodo_selecionado = jQuery("#data_inicial_periodo_selecionado").val(); 
		var data_final_periodo_selecionado = jQuery("#data_final_periodo_selecionado").val(); 
		var adt = jQuery("#field_adt").val();
		var chd = jQuery("#field_chd").val();
		var qts = jQuery('.count_inf').val();
		var idade_chd1 = jQuery('#field_idade').val(); 
		var qtd_noites_pacote = jQuery(".noites_pacote"+data_id_div).val(); 

		var contador_rooms = jQuery("#field_quartos").val();
		contador_rooms = parseInt(contador_rooms)+1; 

		var qtd_total_adt = parseInt(jQuery("#field_adt").val());
		var qtd_total_chd = parseInt(jQuery("#field_chd").val());

		if (qtd_total_adt > 1) {
			var txt_adt = "adultos";
		}else{
			var txt_adt = "adulto";
		}
		if (qtd_total_chd == 1 || qtd_total_chd == 0) {
			var txt_chd = "criança"; 
		}else{
			var txt_chd = "crianças";
		}

		jQuery(".desc_datas").html(data[0]+' até '+data[1]); 
		const now = moment(data_fim); // Data de hoje
		const past = moment(data_inicio); // Outra data no passado
		const duration = moment.duration(now.diff(past));

		// Mostra a diferença em dias
		const days = duration.asDays();
		const noites = parseInt(days); 

		var qtd_noites_extras = (parseInt(noites) - parseInt(qtd_noites_pacote)); 
		console.log(noites);
		console.log(qtd_noites_pacote);
		//jQuery(".desc_pacote").html(jQuery("#field_quartos_"+data_id_div).val()+" "+(jQuery("#field_quartos_"+data_id_div).val() > 1 ? 'quartos' : 'quarto')+" - " +noites+" noites, "+qtd_total_adt+" "+txt_adt+" e "+qtd_total_chd+" "+txt_chd);
		jQuery(".desc_pacote_pax").html(qtd_total_adt+" "+txt_adt+" e "+qtd_total_chd+" "+txt_chd);
		jQuery(".desc_pacotes_noites").html(jQuery("#field_quartos").val()+" "+(jQuery("#field_quartos").val() > 1 ? 'quartos' : 'quarto')+" - " +noites+" noites"); 

		jQuery(".desc_diarias_valor").html((parseInt(noites)+1)+" "+(noites > 1 ? 'diárias' : 'diária'));
		jQuery(".desc_noites_valor").html(qtd_noites_extras+" "+(qtd_noites_extras > 1 ? 'noites extras' : 'noite extra'));
	 
		var txt_quarto = "";
		var txt_quarto_desc = "";
		var idade_crianca = "";
		var idade_crianca_desc = "";
		var text_desc2_email = "";

		for (var x = 0; x < json_quartos.length; x++) { 
			var valor_adt = 0;
			var valor_adt_extra = 0;
			var valor_chd = 0;
			var valor_chd_extra = 0;
			var valor_diaria = 0;
			var idade_crianca1 = jQuery("#idade_crianca1").val().split("/");
			var idade_crianca2 = jQuery("#idade_crianca2").val().split("/");
			var idade_bebe = jQuery("#idade_bebe").val().split("/");
			var moeda = jQuery("#moeda").val();

			jQuery("."+x+"_nome_descritivo_orcamento_"+data_id_div).val(jQuery("#field_quartos").val()+" "+(jQuery("#field_quartos").val() > 1 ? 'quartos' : 'quarto')+" - " +noites+" noites, "+qtd_total_adt+" "+txt_adt+" e "+qtd_total_chd+" "+txt_chd);
			jQuery("."+x+"_nome_datas_orcamento_"+data_id_div).val(data[0]+' até '+data[1]); 
			if (qtd_noites_extras > 0) {
				jQuery("."+x+"_nome_diarias_orcamento_"+data_id_div).val(noites+" diárias + "+qtd_noites_extras+" noites extras = "+(parseInt(noites)+parseInt(qtd_noites_extras))+" diárias"); 
				jQuery("."+x+"_qtd_diarias_unit_"+data_id_div).val(parseInt(noites)); 
			}else{
				jQuery("."+x+"_nome_diarias_orcamento_"+data_id_div).val(noites+" diárias"); 
				jQuery("."+x+"_qtd_diarias_unit_"+data_id_div).val(parseInt(noites)); 
			}

			for (var i = 1; i < contador_rooms; i++) {
				var pax_adt_quarto = parseInt(jQuery("#field_adt").val());
				var pax_chd_quarto = parseInt(jQuery("#field_chd").val());

				var total_pax_adt_quarto = pax_adt_quarto;   

				var total_pax_quarto = parseInt(pax_adt_quarto)+parseInt(pax_chd_quarto);   
				if (i == 1) {
					var add_br = "";
				}else{
					var add_br = "<br>";
				}
				var tipo_quarto = 0;
				if (total_pax_quarto == 1) {
					txt_quarto += 'Quarto '+i+' <p style="margin-bottom: 4px;font-size: 15px;"> Single - '+parseFloat(json_quartos[x].valor_original_single).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'</p>'; 
					txt_quarto_desc += 'Quarto '+i+': Single - '+parseFloat(json_quartos[x].valor_original_single).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'<br>'; 
					tipo_quarto = 1;

					text_desc2_email += '<tr class="order_item"><td class="td" style="text-align: left; vertical-align: middle; font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word; color: #777e7e; border-bottom: 1px solid #E4E4E4;font-weight: bold;">Quarto Single	</td><td class="td" style="text-align: left; vertical-align: middle; color: #777e7e; border-bottom: 1px solid #E4E4E4;">1		</td><td class="td" style="text-align: left; vertical-align: middle; color: #777e7e; border-bottom: 1px solid #E4E4E4;"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">'+parseFloat(json_quartos[x].valor_original_single).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'</span>		</td></tr>'; 
				}else if (total_pax_quarto == 2) {
					txt_quarto += 'Quarto '+i+' <p style="margin-bottom: 4px;font-size: 15px;"> Duplo - '+parseFloat(json_quartos[x].valor_original_duplo).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'</p>'; 
					txt_quarto_desc += 'Quarto '+i+': Duplo - '+parseFloat(json_quartos[x].valor_original_duplo).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'<br>'; 
					tipo_quarto = 2;

					text_desc2_email += '<tr class="order_item"><td class="td" style="text-align: left; vertical-align: middle; font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word; color: #777e7e; border-bottom: 1px solid #E4E4E4;font-weight: bold;">Quarto Duplo	</td><td class="td" style="text-align: left; vertical-align: middle; color: #777e7e; border-bottom: 1px solid #E4E4E4;">1		</td><td class="td" style="text-align: left; vertical-align: middle; color: #777e7e; border-bottom: 1px solid #E4E4E4;"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">'+parseFloat(json_quartos[x].valor_original_duplo).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'</span>		</td></tr>'; 
				}else if (total_pax_quarto == 3) {
					txt_quarto += 'Quarto '+i+' <p style="margin-bottom: 4px;font-size: 15px;"> Triplo - '+parseFloat(json_quartos[x].valor_original_triplo).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'</p>'; 
					txt_quarto_desc += 'Quarto '+i+': Triplo - '+parseFloat(json_quartos[x].valor_original_triplo).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'<br>'; 
					tipo_quarto = 3;

					text_desc2_email += '<tr class="order_item"><td class="td" style="text-align: left; vertical-align: middle; font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word; color: #777e7e; border-bottom: 1px solid #E4E4E4;font-weight: bold;">Quarto Triplo	</td><td class="td" style="text-align: left; vertical-align: middle; color: #777e7e; border-bottom: 1px solid #E4E4E4;">1		</td><td class="td" style="text-align: left; vertical-align: middle; color: #777e7e; border-bottom: 1px solid #E4E4E4;"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">'+parseFloat(json_quartos[x].valor_original_triplo).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+'</span>		</td></tr>'; 
				}else if (total_pax_quarto == 4) {
					txt_quarto += 'Consultar disponibilidade'; 
					txt_quarto_desc += 'Consultar disponibilidade<br>'; 
					tipo_quarto = 4;

					text_desc2_email += ''; 
				}   
				if (tipo_quarto == 1) {
					valor_adt += parseInt(json_quartos[x].valor_original_single.replace(".", ""))*parseInt(pax_adt_quarto);
					valor_adt_extra += (parseInt(json_quartos[x].valor_original_single_extra.replace(".", ""))*parseInt(pax_adt_quarto))*qtd_noites_extras;
					valor_diaria = parseInt(json_quartos[x].valor_original_single.replace(".", ""));
				}
				if (tipo_quarto == 2) {
					valor_adt += parseInt(json_quartos[x].valor_original_duplo.replace(".", ""))*parseInt(pax_adt_quarto);
					valor_adt_extra += (parseInt(json_quartos[x].valor_original_duplo_extra.replace(".", ""))*parseInt(pax_adt_quarto))*qtd_noites_extras;
					valor_diaria = parseInt(json_quartos[x].valor_original_duplo.replace(".", ""));
				}
				if (tipo_quarto == 3) {
					valor_adt += parseInt(json_quartos[x].valor_original_triplo.replace(".", ""))*parseInt(pax_adt_quarto);
					valor_adt_extra += (parseInt(json_quartos[x].valor_original_triplo_extra.replace(".", ""))*parseInt(pax_adt_quarto))*qtd_noites_extras;
					valor_diaria = parseInt(json_quartos[x].valor_original_triplo.replace(".", ""));
				} 
				console.log(valor_adt);

				if (parseInt(pax_chd_quarto) >= 1) {

					if (jQuery("#idd_chd"+i+"_"+data_inicial_periodo_selecionado).val() != 0 || jQuery("#idd_chd"+i+"_"+data_inicial_periodo_selecionado).val() != 'undefined' || jQuery("#idd_chd"+i+"_"+data_inicial_periodo_selecionado).val() != undefined || jQuery("#idd_chd"+i+"_"+data_inicial_periodo_selecionado).val() != null || jQuery("#idd_chd"+i+"_"+data_inicial_periodo_selecionado).val() != 'null') {

						var valor_selecionado = jQuery("#idd_chd"+i+"_"+data_inicial_periodo_selecionado).val();
						
						if (valor_selecionado == "00") {
							var idd_chd = "até 1 ano";
						}else if (valor_selecionado == "01") {
							var idd_chd = "01 ano";
						}else{
							var idd_chd = valor_selecionado+" anos";
						}
						idade_crianca += "<br><span><strong>Idade da criança: </strong> "+idd_chd+"</span>"; 
						idade_crianca_desc += "<br><small><strong>Idade da criança: </strong> "+idd_chd+"</small>"; 

						if (valor_selecionado >= idade_bebe[0] && valor_selecionado <= idade_bebe[1]) {
							valor_chd += parseInt(json_quartos[x].valor_original_bebe)*1;
							valor_chd_extra += (parseInt(json_quartos[x].valor_original_bebe_extra)*1)*qtd_noites_extras;;
						}else if (valor_selecionado >= idade_crianca1[0] && valor_selecionado <= idade_crianca1[1]) {
							valor_chd += parseInt(json_quartos[x].valor_original_crianca1)*1;
							valor_chd_extra += (parseInt(json_quartos[x].valor_original_crianca1_extra)*1)*qtd_noites_extras;;
						}else if (valor_selecionado >= idade_crianca2[0] && valor_selecionado <= idade_crianca2[1]) {
							valor_chd += parseInt(json_quartos[x].valor_original_crianca2)*1;
							valor_chd_extra += (parseInt(json_quartos[x].valor_original_crianca2_extra)*1)*qtd_noites_extras;;
						}


					}

				}
			}  
			var valor_total = (parseInt(valor_chd)+parseInt(valor_adt)); 
			jQuery("#"+x+"_subtotal"+data_id_div).html(parseFloat(valor_total).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));

			jQuery("#"+x+"_valor_noites_extras_"+data_id_div).html(parseFloat(parseInt(valor_adt_extra)+parseInt(valor_chd_extra)).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));

			jQuery("#"+x+"_total_"+data_id_div).html(parseFloat((parseInt(valor_chd)+parseInt(valor_adt))+(parseInt(valor_adt_extra)+parseInt(valor_chd_extra))).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));

			jQuery("#"+x+"_valor_subtotal_"+data_id_div).val(parseFloat(valor_total).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
			jQuery("#"+x+"_valor_taxas_"+data_id_div).val("R$ 0,00");
			jQuery("#"+x+"_valor_extra_"+data_id_div).val(parseFloat(parseInt(valor_adt_extra)+parseInt(valor_chd_extra)).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
			jQuery("#"+x+"_valor_total_"+data_id_div).val(parseFloat((parseInt(valor_chd)+parseInt(valor_adt))+(parseInt(valor_adt_extra)+parseInt(valor_chd_extra))).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
			jQuery("#"+x+"_valor_total_nao_formatado_"+data_id_div).val(parseFloat((parseInt(valor_chd)+parseInt(valor_adt))+(parseInt(valor_adt_extra)+parseInt(valor_chd_extra))));
			jQuery("#"+x+"_valor_diaria"+data_id_div).val(valor_diaria);
			jQuery("#"+x+"_valores_diarias_"+data_id_div).val(parseFloat((parseInt(valor_chd)+parseInt(valor_adt))));

			jQuery("#"+x+"_total_pax_"+data_id_div).val(parseInt(qtd_total_adt)+parseInt(qtd_total_chd));
		}

		goToByScroll('scroll');
	}
} 

function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    jQuery('html,body').animate({
        scrollTop: jQuery("#" + id).offset().top
    }, 3200);
}

function add_room(data){
	var contador = jQuery("#contador_rooms").val();

	if (contador == 4) {
		jQuery("#button_add_room_"+data).attr("style", "display:none");
	}else{
		jQuery("#button_add_room_"+data).attr("style", "");
	}

	var contador_atual = parseInt(contador)+1;

	jQuery("#div_append_quartos_"+data).append('<div class="copy_quartos'+contador_atual+'"> <div class="row" style="margin-bottom:8px"> <div class="col-lg-12 col-12 text-left"> <p style="font-size: 16px;border-bottom: 1px solid #ccc;padding-bottom: 5px;width: 100%;margin-bottom: 5px;">QUARTO '+contador_atual+' <a onclick="remove_room('+contador_atual+')" style="float: right;cursor: pointer;"><i class="fa fa-trash"></i></a></p></div></div><div class="row" style="margin-bottom:8px"> <div class="col-lg-6 col-6 text-left"> <strong style="font-size:14px;">Adultos</strong> </div><div class="col-lg-6 col-6 text-right"> <div class="qty_adt'+contador_atual+'" style="float:right"> <span class="minus_adt'+contador_atual+' bg-dark">-</span> <input type="number" class="count_adt'+contador_atual+'" name="qty_adt'+contador_atual+'" value="2"> <span class="plus_adt'+contador_atual+' bg-dark">+</span> </div></div></div><div class="row rowchd'+contador_atual+'" style="margin-bottom:8px"> <div class="col-lg-6 col-6 text-left"> <strong style="font-size:14px;">Crianças</strong> </div><div class="col-lg-6 col-6 text-right"> <div class="qty_chd'+contador_atual+'" style="float:right"> <span id="minus_chd'+contador_atual+'_'+data+'" class="minus_chd'+contador_atual+' bg-dark"  style="cursor:no-drop;">-</span> <input type="number" id="count_chd'+contador_atual+'_'+data+'" class="count_chd'+contador_atual+'" name="qty_chd'+contador_atual+'" value="1" disabled> <span id="plus_chd'+contador_atual+'_'+data+'" class="plus_chd'+contador_atual+' bg-dark" style="cursor:no-drop;">+</span> </div></div></div><div class="row idade_chd'+contador_atual+'" id="idade_chd'+contador_atual+'" style="padding: 6px 0px;"> <div class="col-lg-6 col-6 text-left"> <strong style="font-size:12px;">Idade da criança</strong> </div><div class="col-lg-6 col-6 text-right"> <select id="idd_chd'+contador_atual+'_'+data+'" class="form-control" style="font-size:12px;width: 62%;float: right;"> <option value="0" disabled selected>Idade</option> <option value="00">Até 1 ano</option> <option value="01">1 ano</option> <option value="02">2 anos</option> <option value="03">3 anos</option> <option value="04">4 anos</option> <option value="05">5 anos</option> <option value="06">6 anos</option> <option value="07">7 anos</option> <option value="08">8 anos</option> <option value="09">9 anos</option> <option value="10">10 anos</option> <option value="11">11 anos</option> <option value="12">12 anos</option> </select> </div></div> </div>');

	jQuery("#contador_rooms").val(contador_atual);
}

function remove_room(key){
	jQuery(".copy_quartos"+key).remove();

	var contador = jQuery("#contador_rooms").val();

	var contador_atual = parseInt(contador)-1;
	jQuery("#contador_rooms").val(contador_atual);
}

function set_value(){
	var data_selecionada = jQuery("#field_checkin").val(); 
	var data_selecionada_periodo = jQuery("#field_checkout").val();

	jQuery("#data_final_periodo_selecionado").val(data_selecionada_periodo);
	jQuery("#data_selecionada").val(data_selecionada+' - '+data_selecionada_periodo);
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function send_orcamento(id, data){ 
	jQuery("."+id+"_button_send_orcamento_"+data).html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height: 22px;margin-right: 0;padding: 0px 91px;">');

	var tipo_tarifario = jQuery("#"+id+"_tipo_tarifario_"+data).val();

	var nome_roteiro = jQuery("."+id+"_nome_roteiro_orcamento_"+data).val();

	var nome_hotel = jQuery("."+id+"_nome_hotel_orcamento_"+data).val();
	var nome_regime = jQuery("."+id+"_nome_regime_orcamento_"+data).val();
	var nome_apto = jQuery("."+id+"_nome_apto_orcamento_"+data).val();

	var nome_pacote = jQuery("."+id+"_nome_pacote_orcamento_"+data).val();
	var nome_descritivo = jQuery("."+id+"_nome_descritivo_orcamento_"+data).val();
	var nome_datas = jQuery("."+id+"_nome_datas_orcamento_"+data).val();
	var nome_diarias = jQuery("."+id+"_nome_diarias_orcamento_"+data).val();
	var qtd_diarias = jQuery("."+id+"_qtd_diarias_unit_"+data).val();

	var valor_subtotal = jQuery("#"+id+"_valor_subtotal_"+data).val();
	var valor_taxas = jQuery("#"+id+"_valor_taxas_"+data).val();
	var valor_noites_extras = jQuery("#"+id+"_valor_extra_"+data).val();
	var valor_total = jQuery("#"+id+"_valor_total_"+data).val();
	var valor_diaria = jQuery("#"+id+"_valor_diaria"+data).val();
	var valores_diarias = jQuery("#"+id+"_valores_diarias_"+data).val();

	var valor_total_nao_formatado = jQuery("#"+id+"_valor_total_nao_formatado_"+data).val();
	var total_pax = jQuery("#"+id+"_total_pax_"+data).val(); 

	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "send_data_roteiros", nome_roteiro:nome_roteiro, nome_hotel: nome_hotel, nome_apto: nome_apto, valor_total_nao_formatado: valor_total_nao_formatado, valor_diaria:valor_diaria, valores_diarias:valor_total_nao_formatado },
        success: function( data ) {
            var id = data.slice(0,-1); 
            jQuery.ajax({
                type: "POST",
                url: "/wp-content/plugins/tarifario-roteiros-main/includes/ajax-periodo.php",
                data: {nome_hotel:nome_hotel, nome_apto:nome_apto, nome_regime:nome_regime, nome_pacote:nome_pacote, nome_descritivo:nome_descritivo, nome_datas:nome_datas, nome_diarias:nome_diarias, valor_subtotal:valor_subtotal, valor_taxas:valor_taxas, valor_noites_extras:valor_noites_extras, valor_total:valor_total, tipo_tarifario:tipo_tarifario}, 
                success: function(result){ 
                    jQuery.get('/?add-to-cart=' + id +'&quantity=1', function(response) { 
                        window.location.href = '/checkout-page';
                    });
                }

            });
        }
    });
}

function check_value_adt(){
	var adt = jQuery("#field_adt").val();
	if (adt > 3) {
		jQuery("#field_adt").val(3);
	}
	if (adt == 1) {
		jQuery("#field_chd").val(0);
		jQuery("#field_idade").attr("disabled", "disabled");
		jQuery("#field_idade").prop("disabled", true);
	}
}

function check_value_chd(){
	var adt = jQuery("#field_adt").val();
	var chd = jQuery("#field_chd").val();
	if (adt > 1) { 
		jQuery("#field_idade").removeAttr("disabled");
		if (chd == 0) {
			jQuery("#field_idade").attr("disabled", "disabled");
			jQuery("#field_idade").prop("disabled", true);
		}else{
			jQuery("#field_idade").removeAttr("disabled");
		}
	}else{
		jQuery("#field_chd").val(0);
		jQuery("#field_idade").attr("disabled", "disabled");
		jQuery("#field_idade").prop("disabled", true);
	}

}

function check_value_qts(){
	var adt = jQuery("#field_quartos").val();
	if (adt > 3) {
		jQuery("#field_quartos").val(3);
	}
}

function open_box_formulario(data){
	jQuery("#bloco_form_data_"+data).toggle(750);
}

function list_categories_posts(){
	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "list_categories_posts" },
        success: function( data ) {
            var retorno = data.slice(0,-1);

            jQuery("#category_name").html(retorno); 

            //preenche_select_apto(id, i);
        }
    });
}

function list_posts(){
	var category = jQuery("#category_name").val();
	var checkin = jQuery("#field_checkin").val();
	var checkout = jQuery("#field_Checkout").val();
	window.location.href = '/destinos/?category_name'+category+'&checkin='+checkin+'&checkout='+checkout;
}

function submit_form_revenda() {
    var name = jQuery("#field_nome").val();
    var email = jQuery("#field_email").val();

    if (name === "") {
        swal({
            title: "O campo nome não pode ser vazio.",
            icon: "error",
        });
    } else if (email === "") {
        swal({
            title: "O campo e-mail não pode ser vazio.",
            icon: "error",
        });
    } else if (!isValidEmailAddress(email)) {
        swal({
            title: "Preencha o campo e-mail com um valor válido.",
            icon: "error",
        });
    } else {
        var token = "MTY0NjYyO0RUTWJESlp0cTdIV3M5RXpEU0VMdzY0UWs3cXVteGtLR0d2VXA5RGtRQjRy";

        var settings = {
            async: true,
            crossDomain: true,
            url: "https://api.traveltec.com.br/serv/marketing/cadastro_revenda",
            method: "POST",
            headers: {
                token: token,
                name: name,
                email: email,
                "cache-control": "no-cache",
            },
        };

        $.ajax(settings).done(function (response) {
            swal({
                text: "Contato cadastrado com sucesso.",
                icon: "success",
            });

            jQuery("#field_nome").val("");
            jQuery("#field_email").val("");
        });
    }
}

function set_cotacao_aereo(){
	jQuery(".button-form-aereo button").html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height: 22px;margin-right: 0;padding: 0px 26px;">');

	var tipo_tarifario = 0;

	var nome_produto = 'Passagem Aérea - '+jQuery("#field_Origem").val()+' a '+jQuery("#field_Destino").val()+' - '+(jQuery("#field_tipo").val() == 1 ? 'Somente Ida' : 'Ida e volta');
	var valor_produto = "0.00"; 
  
	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "send_data_produto", nome_produto:nome_produto, valor_produto: valor_produto },
        success: function( data ) {
            var id = data.slice(0,-1); 
            jQuery.ajax({
                type: "POST",
                url: "/wp-content/plugins/tarifario-roteiros-main/includes/ajax-periodo-aereo.php",
                data: {local: jQuery("#field_Origem").val()+' a '+jQuery("#field_Destino").val(), tipo: jQuery("#field_tipo").val(), data1: jQuery("#field_DataDesembarque").val(), data2: jQuery("#field_DataEmbarque").val(), pax: jQuery("#field_pessoas").val(), classe: jQuery("#field_Classe").val(), tipo_tarifario:tipo_tarifario}, 
                success: function(result){ 
                    jQuery.get('/?add-to-cart=' + id +'&quantity=1', function(response) { 
                        window.location.href = '/checkout-page';
                    });
                }

            });
        }
    });
}
function set_cotacao_hotel(){
	jQuery(".button-form-hospedagem button").html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height: 22px;margin-right: 0;padding: 0px 15px;">');

	var tipo_tarifario = 0;

	var nome_produto = 'Hospedagem - '+jQuery("#field_destino").val();
	var valor_produto = "0.00"; 
  
	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "send_data_produto", nome_produto:nome_produto, valor_produto: valor_produto },
        success: function( data ) {
            var id = data.slice(0,-1); 
            jQuery.ajax({
                type: "POST",
                url: "/wp-content/plugins/tarifario-roteiros-main/includes/ajax-periodo-hotel.php",
                data: {local: jQuery("#field_destino").val(), data1: jQuery("#field_checkin").val(), data2: jQuery("#field_checkout").val(), pax: jQuery("#field_pessoas").val(), quartos: jQuery("#field_quartos").val(), tipo_tarifario:tipo_tarifario}, 
                success: function(result){ 
                    jQuery.get('/?add-to-cart=' + id +'&quantity=1', function(response) { 
                        window.location.href = '/checkout-page';
                    });
                }

            });
        }
    });
}
function set_cotacao_veiculos(){
	jQuery(".button-form-veiculos button").html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height: 22px;margin-right: 0;padding: 0px 26px;">');

	var tipo_tarifario = 0;

	var nome_produto = 'Veículos - '+jQuery("#field_retirada").val();
	var valor_produto = "0.00"; 

	var devolucao = 0;
	if (jQuery("input[name='field_outrolugar']").is(':checked') == true) {
		devolucao = 1;
	}
  
	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "send_data_produto", nome_produto:nome_produto, valor_produto: valor_produto },
        success: function( data ) {
            var id = data.slice(0,-1); 
            jQuery.ajax({
                type: "POST",
                url: "/wp-content/plugins/tarifario-roteiros-main/includes/ajax-periodo-veiculos.php",
                data: {local: jQuery("#field_retirada").val(), data1: jQuery("#field_retirar").val(), data2: jQuery("#field_entrega").val(), devolucao: devolucao, local_devolver: jQuery("#field_devolver").val(), tipo_tarifario:tipo_tarifario}, 
                success: function(result){ 
                    jQuery.get('/?add-to-cart=' + id +'&quantity=1', function(response) { 
                        window.location.href = '/checkout-page';
                    });
                }

            });
        }
    });
}
function set_cotacao_seguro(){
	jQuery(".cotar-seguro button").html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height: 22px;margin-right: 0;padding: 0px 26px;">');

	var tipo_tarifario = 0;

	var nome_produto = 'Seguro Viagem - '+jQuery("#field_Destino").val();
	var valor_produto = "0.00"; 
 
  
	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "send_data_produto", nome_produto:nome_produto, valor_produto: valor_produto },
        success: function( data ) {
            var id = data.slice(0,-1); 
            jQuery.ajax({
                type: "POST",
                url: "/wp-content/plugins/tarifario-roteiros-main/includes/ajax-periodo-seguro.php",
                data: {local: jQuery("#field_Destino").val(), data1: jQuery("#field_ida").val(), data2: jQuery("#field_volta").val(), pax: jQuery("#field_passageiros").val(), tipo_tarifario:tipo_tarifario}, 
                success: function(result){ 
                    jQuery.get('/?add-to-cart=' + id +'&quantity=1', function(response) { 
                        window.location.href = '/checkout-page';
                    });
                }

            });
        }
    });
}
function set_cotacao_hotel(){
	jQuery(".elementor-button-link").html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height: 22px;margin-right: 0;padding: 0px 26px;">');
 	
 	var url_atual = window.location;
 	url_atual = url_atual.pathname.split("/");

	var tipo_tarifario = 0;

	var nome_produto = 'Hotel - '+url_atual[2].replace(/-/g, " ").toLowerCase().replace(/\b[a-z]/g, function(letter) {
	    return letter.toUpperCase();
	});
	var valor_produto = "0.00";  
  
	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "send_data_produto", nome_produto:nome_produto, valor_produto: valor_produto },
        success: function( data ) {
            var id = data.slice(0,-1); 
            jQuery.ajax({
                type: "POST",
                url: "/wp-content/plugins/tarifario-roteiros-main/includes/ajax-periodo-hotelaria.php",
                data: {local: nome_produto, tipo_tarifario:tipo_tarifario}, 
                success: function(result){ 
                    jQuery.get('/?add-to-cart=' + id +'&quantity=1', function(response) { 
                        window.location.href = '/checkout-page';
                    });
                }

            });
        }
    });
}
