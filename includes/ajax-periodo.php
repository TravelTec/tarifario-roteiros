<?php  
	session_start();
	unset($_SESSION['teste']);
	$_SESSION['teste'] .= 'Hotel: '.$_POST['nome_hotel'].'<br>';
	$_SESSION['teste'] .= $_POST['nome_apto'].' - '.$_POST['nome_regime'].'<br>';
	$_SESSION['teste'] .= $_POST['nome_pacote'].'<br><br>';
	$_SESSION['teste'] .= $_POST['nome_datas'].'<br>';
	$_SESSION['teste'] .= $_POST['nome_descritivo'].'<br>';
	$_SESSION['teste'] .= $_POST['nome_diarias'].'<br><br>';
	$_SESSION['teste'] .= 'Taxas: '.$_POST['valor_taxas'].'<br>';
	$_SESSION['teste'] .= 'Valor das noites extras: '.$_POST['valor_noites_extras'].'<br>';

	$_SESSION['tipo_tarifario'] = $_POST['tipo_tarifario'];

	echo $_SESSION['teste'];
	echo $_SESSION['tipo_tarifario'];
	session_write_close();
?>